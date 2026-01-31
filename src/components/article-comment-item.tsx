"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { ArticleCommentsWithRelations } from "@/lib/actions/articleActions";
import { deleteArticleCommentsAction } from "@/lib/actions/articleActions";
import DeleteCommentButton from "./ui/delete-comment-btn";

type Props = {
  comment: ArticleCommentsWithRelations;
  onDeleted?: (id: string) => void;
};

export default function CommentItem({ comment, onDeleted }: Props) {
  const { data: session } = useSession();
  const [pending, setPending] = useState(false);

  const canDelete =
    session?.user?.id === comment.authorId || session?.user?.role === "ADMIN";

  const canEdit = session?.user?.id === comment.authorId;

  async function handleDelete() {
    setPending(true);
    const result = await deleteArticleCommentsAction({
      commentId: comment.id,
      articleSlug: comment.article.slug,
    });
    setPending(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Comment deleted");
    onDeleted?.(comment.id);
  }

  return (
    <div className="group flex gap-3">
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2 text-sm">
          <div>
            <span className="font-medium">
              {comment.author.name ?? "Anonymous"}
            </span>

            <span className="text-muted-foreground">
              · {formatDistanceToNow(new Date(comment.createdAt))} ago
            </span>
          </div>
          <div className="flex gap-2">
            {canEdit && (
              <button
                onClick={handleDelete}
                disabled={pending}
                className="ml-auto text-muted-foreground hover:text-blue-600"
                aria-label="Edit comment"
              >
                <Pencil className="h-4 w-4" />
              </button>
            )}
            {canDelete && (
              <DeleteCommentButton onConfirm={handleDelete} pending={pending} />
            )}
          </div>
        </div>

        <div
          className="prose prose-sm max-w-none mt-1"
          dangerouslySetInnerHTML={{ __html: comment.content }}
        />
      </div>
    </div>
  );
}
