"use client";

import { QuestionType } from "@/types/vitaTEST/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  value: QuestionType;
  onChange: (type: QuestionType) => void;
};

const LABELS: Record<QuestionType, string> = {
  SINGLE: "Single choice",
  MULTIPLE: "Multiple choice",
  SCALE: "Scale",
  TEXT: "Text answer",
};

export default function QuestionTypeSelect({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {Object.entries(LABELS).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
