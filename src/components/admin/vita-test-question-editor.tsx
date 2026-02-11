"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { QuestionDraft } from "@/types/vitaTEST/types";
import QuestionCard from "./vita-test-question-card";
import AddQuestionButton from "./ui/add-question-button";
import { mapQuestionToDraft } from "@/lib/mappers/vitaTest";
import { VitaTestQuestionWithOptions } from "@/types/vitaTEST/prisma";
import { Button } from "../ui/Button";
import { saveVitaTestQuestionsAction } from "@/lib/actions/vitaTestActions";
import { toast } from "sonner";

type Props = {
  vitaTestId: string;
  initialQuestions: VitaTestQuestionWithOptions[];
};
export default function VitaTestQuestionEditor({
  vitaTestId,
  initialQuestions,
}: Props) {
  const [questions, setQuestions] = useState<QuestionDraft[]>(
    initialQuestions.sort((a, b) => a.order - b.order).map(mapQuestionToDraft),
  );

  function addQuestion() {
    setQuestions((prev) => [
      ...prev,
      {
        tempId: nanoid(),
        order: prev.length + 1,
        questionText: "",
        type: "SINGLE",
        required: true,
        options: [
          {
            tempId: nanoid(),
            label: "Option 1",
            value: 1,
            order: 1,
          },
        ],
      },
    ]);
  }

  function updateQuestion(tempId: string, data: Partial<QuestionDraft>) {
    setQuestions((prev) =>
      prev.map((q) => (q.tempId === tempId ? { ...q, ...data } : q)),
    );
  }

  function deleteQuestion(tempId: string) {
    setQuestions((prev) =>
      prev
        .filter((q) => q.tempId !== tempId)
        .map((q, idx) => ({ ...q, order: idx + 1 })),
    );
  }

  const [saving, setSaving] = useState(false);
  async function handleSave() {
    setSaving(true);

    if (questions.length == 0) {
      toast.error("Please add questions first!");
      setSaving(false);
      return false;
    }

    const res = await saveVitaTestQuestionsAction(vitaTestId, questions);
    if (res?.success) {
      toast.success("Questions saved");
    } else {
      toast.error(res?.error ?? "Failed to save questions");
    }

    setSaving(false);
  }

  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.tempId}
          question={q}
          onChange={updateQuestion}
          onDelete={deleteQuestion}
        />
      ))}

      <AddQuestionButton onClick={addQuestion} />
      <div className="pt-6">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Questions"}
        </Button>
      </div>
    </div>
  );
}
