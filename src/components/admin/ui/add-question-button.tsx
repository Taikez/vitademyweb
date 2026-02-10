"use client";

type Props = {
  onClick: () => void;
};

export default function AddQuestionButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg border-2 border-dashed py-6 text-sm text-muted-foreground hover:border-primary hover:text-primary transition"
    >
      + Add question
    </button>
  );
}
