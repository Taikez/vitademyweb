"use client";

import { useRouter } from "next/navigation";
import { deleteArticleAction } from "@/lib/actions/articleActions";
import AdminActionsButton from "../ui/admin-actions-button";
import { useConfirm } from "../ui/confirm-dialog";
import { toast } from "sonner";

export default function ArticleAdminActions({
  articleId,
  slug,
}: {
  articleId: string;
  slug: string;
}) {
  const confirm = useConfirm();
  const router = useRouter();

  async function handleDelete() {
    const ok = await confirm({
      title: "Delete Article",
      description:
        "This will delete this article and hide it from users. You can restore it later.",
      confirmText: "Delete Article",
      cancelText: "Cancel",
    });

    if (!ok) return;
    const res = await deleteArticleAction(articleId);

    if (res?.success) {
      toast.success("Article deleted!");
      router.refresh();
    } else {
      toast.error(res?.error ?? "Failed to delete Article");
    }
    router.push("/admin/manageArticle");
  }

  return (
    <div className="flex gap-3 my-4">
      <AdminActionsButton
        variant="edit"
        onClick={() => router.push(`/admin/manageArticle/edit/${slug}`)}
      />

      <AdminActionsButton variant="delete" onClick={handleDelete} />
    </div>
  );
}
