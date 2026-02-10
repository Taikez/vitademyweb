"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { QuestionDraft } from "@/types/vitaTEST/types";
import QuestionCard from "./vita-test-question-card";
import AddQuestionButton from "./ui/add-question-button";
import { VitaTestQuestion } from "@prisma/client";

type Props = {
  vitaTestId: string;
  initialQuestions: VitaTestQuestion[];
};
export default function VitaTestQuestionEditor({
  vitaTestId,
  initialQuestions,
}: Props) {
  const [questions, setQuestions] = useState<QuestionDraft[]>([]);

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
    </div>
  );
}
