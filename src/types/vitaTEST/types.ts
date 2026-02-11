export type OptionDraft = {
  id?: string;
  tempId: string;
  label: string;
  value: number;
  order: number;
};

export type QuestionDraft = {
  id?: string;
  tempId: string;
  order: number;
  questionText: string;
  type: QuestionType;
  required: boolean;
  options: OptionDraft[];
};

export type QuestionType = "SINGLE" | "MULTIPLE" | "SCALE" | "TEXT";
