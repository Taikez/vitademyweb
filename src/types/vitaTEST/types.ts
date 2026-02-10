export type QuestionDraft = {
  id?: string; // exists only if already saved
  tempId: string; // always exists (React keys)
  order: number;

  questionText: string;
  type: "SINGLE" | "MULTIPLE" | "SCALE" | "TEXT";
  required: boolean;

  options: OptionDraft[];
};

export type OptionDraft = {
  id?: string;
  tempId: string;
  label: string;
  value: number;
  order: number;
};

export type QuestionType = "SINGLE" | "MULTIPLE" | "SCALE" | "TEXT";
