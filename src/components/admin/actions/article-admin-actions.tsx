"use client";

import { useRouter } from "next/navigation";
import { deleteArticleAction } from "@/lib/actions/articleActions";
import { confirmAction } from "../ui/confirm-dialog";
import AdminActionsButton from "../ui/admin-actions-button";

export default function ArticleAdminActions({
  articleId,
  slug,
}: {
  articleId: string;
  slug: string;
}) {
  const router = useRouter();

  async function handleDelete() {
    await confirmAction({
      message: "Are you sure you want to delete this article?",
      action: () => deleteArticleAction(articleId),
      successMessage: "Successfully deleted article",
      errorMessage: "Failed to delete article",
    });

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
