"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import CommentItem from "./article-comment-item";
import { ArticleCommentsWithRelations } from "@/lib/actions/articleActions";
import { Button } from "./ui/Button";

type Props = {
  comments: ArticleCommentsWithRelations[];
  loading: boolean;
  onDeleted?: (id: string) => void;
};

const COMMENTS_PER_PAGE = 5;

export default function CommentList({ comments, loading, onDeleted }: Props) {
  const [visibleCount, setVisibleCount] = useState(COMMENTS_PER_PAGE);

  if (loading) {
    return (
      <div className="mt-6 flex justify-center text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="mt-6 text-sm text-muted-foreground">No comments yet.</div>
    );
  }

  const visibleComments = comments.slice(0, visibleCount);
  const hasMore = visibleCount < comments.length;

  return (
    <div className="mt-6 space-y-6">
      {visibleComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onDeleted={onDeleted} />
      ))}

      {hasMore && (
        <div className="pt-2">
          <Button
            variant="ghost"
            className="text-sm"
            onClick={() => setVisibleCount((prev) => prev + COMMENTS_PER_PAGE)}
          >
            View more comments
          </Button>
        </div>
      )}
    </div>
  );
}
