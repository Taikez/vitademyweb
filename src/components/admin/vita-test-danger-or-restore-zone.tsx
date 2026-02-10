"use client";

import {
  deleteVitaTestAction,
  restoreVitaTestAction,
} from "@/lib/actions/vitaTestActions";
import { Button } from "../ui/Button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useConfirm } from "./ui/confirm-dialog";
import { VitaTestStatus } from "@prisma/client";

type Props = {
  vitaTestId: string;
  status: VitaTestStatus;
};

export default function VitaTestDangerOrRestoreZone({
  vitaTestId,
  status,
}: Props) {
  const confirm = useConfirm();
  const router = useRouter();

  const isDeleted =
    status === VitaTestStatus.ARCHIVED || status === VitaTestStatus.DELETED;

  async function handleDelete() {
    const ok = await confirm({
      title: "Delete VitaTEST",
      description:
        "This will archive the test and hide it from users. You can restore it later.",
      confirmText: "Delete Test",
      cancelText: "Cancel",
    });

    if (!ok) return;

    const res = await deleteVitaTestAction(vitaTestId);

    if (res?.success) {
      toast.success("VitaTEST deleted");
      router.refresh();
    } else {
      toast.error(res?.error ?? "Failed to delete VitaTEST");
    }
  }

  async function handleRestore() {
    const ok = await confirm({
      title: "Restore VitaTEST",
      description: "This will restore the test and make it available again.",
      confirmText: "Restore Test",
      cancelText: "Cancel",
    });

    if (!ok) return;

    const res = await restoreVitaTestAction(vitaTestId);

    if (res?.success) {
      toast.success("VitaTEST restored");
      router.refresh();
    } else {
      toast.error(res?.error ?? "Failed to restore VitaTEST");
    }
  }

  // ---------------- UI ----------------

  if (isDeleted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
          Restore Zone
        </h3>

        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
          This test is currently archived. You can restore it and make it
          available again.
        </p>

        <div className="mt-4">
          <Button variant="success" onClick={handleRestore}>
            Restore Test
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
      <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
        Danger Zone
      </h3>

      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
        These actions are destructive and should be used with caution.
      </p>

      <div className="mt-4">
        <Button variant="destructive" onClick={handleDelete}>
          Delete Test
        </Button>
      </div>
    </div>
  );
}
