"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ArticleCommentsWithRelations } from "@/lib/actions/articleActions";
import { Button } from "./ui/Button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  comment: ArticleCommentsWithRelations | null;
  onSubmit: (updatedContent: string, commentId: string) => Promise<void>;
};

export default function ArticleEditCommentDialog({
  open,
  onOpenChange,
  comment,
  onSubmit,
}: Props) {
  const [content, setContent] = useState("");
  const [pending, setPending] = useState(false);

  // When comment changes, populate textarea
  useEffect(() => {
    if (comment) {
      setContent(comment.content.replace(/<[^>]*>?/gm, "")); // strip HTML
    }
  }, [comment]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!comment) return;

    setPending(true);
    await onSubmit(content, comment.id);
    setPending(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Comment</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            placeholder="Edit your comment..."
            required
          />

          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              disabled={pending}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
