// components/vitatest/OptionEditor.tsx
"use client";

import { OptionDraft } from "@/types/vitaTEST/types";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";
import { Button } from "../ui/Button";

type Props = {
  options: OptionDraft[];
  onChange: (options: OptionDraft[]) => void;
};

export default function OptionEditor({ options, onChange }: Props) {
  function updateOption(tempId: string, patch: Partial<OptionDraft>) {
    const next = options.map((opt) =>
      opt.tempId === tempId ? { ...opt, ...patch } : opt,
    );
    onChange(next);
  }

  function addOption() {
    onChange([
      ...options,
      {
        tempId: crypto.randomUUID(),
        label: "",
        value: options.length + 1,
        order: options.length,
      },
    ]);
  }

  function removeOption(tempId: string) {
    onChange(options.filter((opt) => opt.tempId !== tempId));
  }

  return (
    <div className="space-y-3 mt-3">
      {options.map((opt) => (
        <div key={opt.tempId} className="flex items-center gap-2">
          {/* Option label */}
          <Input
            value={opt.label}
            onChange={(e) =>
              updateOption(opt.tempId, { label: e.target.value })
            }
            placeholder="Enter option here"
            className="flex-1"
          />

          {/* Option value */}
          <Input
            type="number"
            value={opt.value}
            onChange={(e) =>
              updateOption(opt.tempId, {
                value: Number(e.target.value),
              })
            }
            className="w-24"
          />

          {/* Remove */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeOption(opt.tempId)}
            className="text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={addOption}
        className="flex items-center gap-2 text-blue-600"
      >
        <Plus className="h-4 w-4" />
        Add option
      </Button>
    </div>
  );
}
