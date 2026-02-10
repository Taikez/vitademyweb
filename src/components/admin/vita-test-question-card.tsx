import { QuestionDraft } from "@/types/vitaTEST/types";
import OptionEditor from "./vita-test-option-editor";
import QuestionTypeSelect from "./vita-test-question-type-select";
import { Checkbox } from "../ui/checkbox";

type Props = {
  question: QuestionDraft;
  onChange: (tempId: string, data: Partial<QuestionDraft>) => void;
  onDelete: (tempId: string) => void;
};

export default function QuestionCard({ question, onChange, onDelete }: Props) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <input
        className="w-full border-b text-lg font-medium outline-none"
        placeholder="Enter question here"
        value={question.questionText}
        onChange={(e) =>
          onChange(question.tempId, { questionText: e.target.value })
        }
      />

      <div className="mt-3 flex items-center gap-4">
        <QuestionTypeSelect
          value={question.type}
          onChange={(type) => onChange(question.tempId, { type })}
        />
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <Checkbox
            checked={question.required}
            onCheckedChange={(checked) =>
              onChange(question.tempId, { required: Boolean(checked) })
            }
          />
          Required
        </label>

        <button
          className="ml-auto text-sm text-red-500"
          onClick={() => onDelete(question.tempId)}
        >
          Delete
        </button>
      </div>

      {question.type !== "TEXT" && (
        <OptionEditor
          options={question.options}
          onChange={(options) => onChange(question.tempId, { options })}
        />
      )}
    </div>
  );
}
