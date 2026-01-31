"use client";

import { useState } from "react";
import { Article } from "@prisma/client";
import { ArticleCommentsWithRelations } from "@/lib/actions/articleActions";
import CommentEditor from "./article-comment-editor";
import CommentList from "./article-comment-list";

type Props = {
  loading: boolean;
  article: Article;
  initialComments: ArticleCommentsWithRelations[];
};

export default function ArticleComments({
  loading,
  article,
  initialComments,
}: Props) {
  const [comments, setComments] =
    useState<ArticleCommentsWithRelations[]>(initialComments);

  function handleCommentDeleted(id: string) {
    setComments((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-lg font-semibold mb-6">
        Discussion
        <span className="ml-2 text-sm text-muted-foreground">
          ({comments.length})
        </span>
      </h2>

      <CommentEditor
        articleSlug={article.slug}
        onCommentAdded={(c) => setComments((prev) => [c, ...prev])}
      />

      <CommentList
        comments={comments}
        loading={loading}
        onDeleted={handleCommentDeleted}
      />
    </section>
  );
}
