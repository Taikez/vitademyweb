"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import VitaTestHeaderForm from "@/components/admin/vita-test-header-form";

import { updateVitaTestHeaderAction } from "@/lib/actions/vitaTestActions";
import { VitaTestWithStats } from "@/lib/actions/vitaTestActions";
import VitaTestDangerOrRestoreZone from "@/components/admin/vita-test-danger-or-restore-zone";
import Stat from "@/components/admin/stat";

type Props = {
  test: VitaTestWithStats;
};

export default function VitaTestDetailClient({ test }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [header, setHeader] = useState({
    title: test.title,
    description: test.description ?? "",
    durationMinutes: test.durationMinutes ?? 0,
  });

  const status = test.status;

  async function handleNext() {
    setSaving(true);

    const res = await updateVitaTestHeaderAction({
      id: test.id,
      ...header,
    });

    setSaving(false);

    if (res?.success !== false) {
      router.push(`/admin/manageVitaTEST/${test.id}`);
    }
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold">{test.title}</h1>
          <p className="text-sm text-muted-foreground">Status: {test.status}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Stat label="Questions" value={test._count.questions} />
        <Stat label="Attempts" value={test._count.attempts} />
      </div>

      {/* Editable Header Form */}
      <VitaTestHeaderForm
        value={header}
        onChange={setHeader}
        onNext={handleNext}
        saving={saving}
      />

      {/* Questions CTA */}
      <div className="rounded-lg border p-4">
        <h3 className="font-medium">Questions</h3>
        <p className="text-sm text-muted-foreground">
          This test has {test._count.questions} questions.
        </p>

        <Link
          href={`/admin/manageVitaTEST/${test.id}/questions`}
          className="text-blue-600 text-sm hover:underline"
        >
          Manage Questions →
        </Link>
      </div>

      {/* Danger Zone */}
      <VitaTestDangerOrRestoreZone vitaTestId={test.id} status={status} />
    </div>
  );
}
