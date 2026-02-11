import { nanoid } from "nanoid";
import { QuestionDraft } from "@/types/vitaTEST/types";
import { VitaTestQuestionWithOptions } from "@/types/vitaTEST/prisma";

export function mapQuestionToDraft(
  q: VitaTestQuestionWithOptions,
): QuestionDraft {
  return {
    id: q.id,
    tempId: nanoid(),
    order: q.order,
    questionText: q.questionText,
    type: q.type,
    required: q.required,
    options: q.options
      .sort((a, b) => a.order - b.order)
      .map((opt) => ({
        id: opt.id,
        tempId: nanoid(),
        label: opt.label,
        value: opt.value,
        order: opt.order,
      })),
  };
}
