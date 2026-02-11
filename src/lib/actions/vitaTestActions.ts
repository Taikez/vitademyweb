"use server";

import { getServerSession } from "next-auth";
import prisma from "../prisma";
import { VitaTest } from "@prisma/client";
import { authOptions } from "@/auth";
import { revalidatePath } from "next/cache";
import { QuestionDraft } from "@/types/vitaTEST/types";

export type VitaTestWithStats = VitaTest & {
  _count: {
    questions: number;
    attempts: number;
  };
};

export async function getVitaTestsAction(): Promise<{
  success: boolean;
  tests?: VitaTestWithStats[];
  error?: string;
}> {
  try {
    const tests = await prisma.vitaTest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
        _count: {
          select: {
            questions: true,
            attempts: true,
          },
        },
      },
    });

    return {
      success: true,
      tests,
    };
  } catch (error: any) {
    console.error("getVitaTestsAction error:", error);
    return {
      success: false,
      error: "Failed to fetch tests.",
    };
  }
}

export async function getVitaTestsActionById(id: string) {
  try {
    const test = await prisma.vitaTest.findUnique({
      where: {
        id: id,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
        attempts: true,
        _count: {
          select: {
            questions: true,
            attempts: true,
          },
        },
      },
    });

    return {
      success: true,
      test,
    };
  } catch (error: any) {
    console.error("getVitaTestsAction error:", error);
    return {
      success: false,
      error: "Failed to fetch tests.",
    };
  }
}

export async function deleteVitaTestAction(vitaTestId: string) {
  try {
    await prisma.vitaTest.update({
      where: { id: vitaTestId },
      data: { status: "DELETED" },
    });

    return { success: true };
  } catch (error) {
    console.error("Delete VitaTest failed:", error);
    return {
      success: false,
      error: "Failed to delete test",
    };
  }
}

export async function restoreVitaTestAction(vitaTestId: string) {
  try {
    await prisma.vitaTest.update({
      where: { id: vitaTestId },
      data: { status: "DRAFT" },
    });

    return { success: true };
  } catch (error) {
    console.error("Delete VitaTest failed:", error);
    return {
      success: false,
      error: "Failed to delete test",
    };
  }
}

type CreateVitaTestInput = {
  title: string;
  description?: string;
  durationMinutes?: number;
};

export async function createVitaTestAction(data: CreateVitaTestInput) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
      return { error: "Unauthorized" };
    }

    if (!data.title || data.title.trim().length < 3) {
      return { error: "Title must be at least 3 characters long." };
    }

    var slugify = require("slugify");
    const slug = slugify(data.title, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: true, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });

    const vitaTest = await prisma.vitaTest.create({
      data: {
        title: data.title.trim(),
        slug: slug,
        description: data.description?.trim() || null,
        durationMinutes: data.durationMinutes ?? null,
        createdById: session.user.id,
        status: "DRAFT",
      },
    });

    return {
      success: true,
      vitaTest,
    };
  } catch (error) {
    console.error("createVitaTestAction error:", error);
    return {
      success: false,
      error: "Failed to create VitaTest",
    };
  }
}

type UpdateVitaTestHeaderInput = {
  id: string;
  title: string;
  description?: string;
  durationMinutes?: number;
};

export async function updateVitaTestHeaderAction(
  input: UpdateVitaTestHeaderInput,
): Promise<{ success: boolean; error?: string }> {
  try {
    const { id, title, description, durationMinutes } = input;

    if (!title || title.trim().length === 0) {
      return { success: false, error: "Title is required" };
    }

    var slugify = require("slugify");
    const slug = slugify(title, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: true, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });

    await prisma.vitaTest.update({
      where: { id },
      data: {
        slug: slug.trim(),
        title: title.trim(),
        description: description?.trim() || null,
        durationMinutes:
          typeof durationMinutes === "number" && durationMinutes > 0
            ? durationMinutes
            : null,
      },
    });

    // Revalidate both list & detail pages
    revalidatePath("/admin/manageVitaTEST");
    revalidatePath(`/admin/manageVitaTEST/${id}`);

    return { success: true };
  } catch (err) {
    console.error("updateVitaTestHeaderAction error:", err);
    return {
      success: false,
      error: "Failed to update test information",
    };
  }
}

export async function saveVitaTestQuestionsAction(
  vitaTestId: string,
  questions: QuestionDraft[],
) {
  try {
    // 1️⃣ Get existing DB questions
    const existing = await prisma.vitaTestQuestion.findMany({
      where: { VitaTestId: vitaTestId },
      select: { id: true },
    });

    const existingIds = existing.map((q) => q.id);
    const incomingIds = questions
      .filter((q) => q.id)
      .map((q) => q.id!) as string[];

    // 2️⃣ Determine deletions
    const toDelete = existingIds.filter((id) => !incomingIds.includes(id));

    await prisma.$transaction(async (tx) => {
      // 🗑 Delete removed questions
      if (toDelete.length > 0) {
        await tx.vitaTestQuestion.deleteMany({
          where: {
            id: { in: toDelete },
          },
        });
      }

      // 3️⃣ Upsert questions
      for (let index = 0; index < questions.length; index++) {
        const q = questions[index];

        if (q.id) {
          // 🔄 Update existing question
          await tx.vitaTestQuestion.update({
            where: { id: q.id },
            data: {
              order: index + 1,
              questionText: q.questionText,
              type: q.type,
              required: q.required,
            },
          });

          // Replace options completely
          await tx.questionOption.deleteMany({
            where: { questionId: q.id },
          });

          if (q.type !== "TEXT") {
            await tx.questionOption.createMany({
              data: q.options.map((opt, i) => ({
                questionId: q.id!,
                label: opt.label,
                value: opt.value,
                order: i + 1,
              })),
            });
          }
        } else {
          // ➕ Create new question
          const created = await tx.vitaTestQuestion.create({
            data: {
              VitaTestId: vitaTestId,
              order: index + 1,
              questionText: q.questionText,
              type: q.type,
              required: q.required,
            },
          });

          if (q.type !== "TEXT") {
            await tx.questionOption.createMany({
              data: q.options.map((opt, i) => ({
                questionId: created.id,
                label: opt.label,
                value: opt.value,
                order: i + 1,
              })),
            });
          }
        }
      }
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to save questions" };
  }
}
