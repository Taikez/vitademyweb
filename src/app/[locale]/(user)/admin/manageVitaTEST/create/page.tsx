"use client";

import VitaTestHeaderForm from "@/components/admin/vita-test-header-form";
import { createVitaTestAction } from "@/lib/actions/vitaTestActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateVitaTestPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [header, setHeader] = useState({
    title: "",
    description: "",
    durationMinutes: 10,
  });

  async function handleNext() {
    if (!header.title.trim()) {
      toast.error("Title is required!");
      return;
    }

    setSaving(true);

    const res = await createVitaTestAction(header);

    var errorMsg = "";
    if (!res.success) {
      errorMsg = "Error while saving VitaTEST: " + res.error;
    }

    if (!res.vitaTest) {
      errorMsg =
        "Failed to save VitaTEST data to database. Please try again later!";
    }

    setSaving(false);

    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    const vitaTestId = res.vitaTest ? res.vitaTest.id : "";
    if (vitaTestId) {
      setVitaTestId(vitaTestId);
      toast.success("Test draft saved");
      router.push(`/admin/manageVitaTEST/${vitaTestId}/questions`);
    }
  }

  const [vitaTestId, setVitaTestId] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-10">
      <h1 className="text-2xl font-semibold">Create VitaTEST</h1>

      <VitaTestHeaderForm
        value={header}
        onChange={setHeader}
        onSaved={setVitaTestId}
        onNext={handleNext}
        saving={saving}
      />

      {vitaTestId && (
        <div className="pt-6 border-t">
          {/* VitaTestQuestionEditor goes here next */}
        </div>
      )}
    </div>
  );
}
