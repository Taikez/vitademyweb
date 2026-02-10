"use client";

import { Button } from "../ui/Button";

type Props = {
  value: {
    title: string;
    description: string;
    durationMinutes: number;
  };
  onChange: (value: Props["value"]) => void;
  onSaved?: (id: string) => void;
  onNext: () => void;
  saving?: boolean;
};

export default function VitaTestHeaderForm({
  value,
  onChange,
  onNext,
  saving,
}: Props) {
  return (
    <div className="rounded-lg border p-6 space-y-6">
      <div>
        <h2 className="text-lg font-medium">Test Information</h2>
        <p className="text-sm text-muted-foreground">
          Basic details about this personality test.
        </p>
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            value={value.title}
            onChange={(e) => onChange({ ...value, title: e.target.value })}
            placeholder="e.g. Cognitive Resilience Assessment"
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Description</label>
          <textarea
            value={value.description}
            onChange={(e) =>
              onChange({ ...value, description: e.target.value })
            }
            placeholder="What does this test measure?"
            rows={3}
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </div>

        {/* Duration */}
        <div className="space-y-1 space-x-2">
          <label className="text-sm font-medium">Duration (minutes)</label>
          <input
            type="number"
            min={1}
            value={value.durationMinutes}
            onChange={(e) =>
              onChange({
                ...value,
                durationMinutes: Number(e.target.value),
              })
            }
            placeholder="e.g 10"
            className="w-32 rounded border px-3 py-2 text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Recommended time to complete the test.
          </p>
        </div>
        <Button onClick={onNext} disabled={saving}>
          {saving ? "Saving..." : "Next"}
        </Button>
      </div>
    </div>
  );
}
