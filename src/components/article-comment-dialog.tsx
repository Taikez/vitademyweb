"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { createArticleCommentAction } from "@/lib/actions/articleActions";
import { Article } from "@prisma/client";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: Article;
};

export default function ArticleCommentDialog({
  open,
  onOpenChange,
  article,
}: Props) {
  const [pending, setPending] = useState(false);
  const [comment, setComment] = useState("");

  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  function resetForm() {
    setComment("");
    setRating(null);
    setHoveredRating(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setPending(true);
    const result = await createArticleCommentAction({
      articleSlug: article.slug,
      content: comment,
      rating,
    });
    setPending(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Comment successfully added. Thanks for your review!");
    setComment("");
    setRating(null);
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          resetForm(); // reset on close
        }
        onOpenChange(isOpen);
      }}
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a Comment</DialogTitle>
          </DialogHeader>

          {/* ⭐ Rating */}
          {/* <div className="flex gap-1 py-3">
            {[1, 2, 3, 4, 5].map((star) => {
              const isFilled =
                hoveredRating !== null
                  ? star <= hoveredRating
                  : rating !== null && star <= rating;

              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(null)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-6 w-6 transition-colors duration-150 ${
                      isFilled
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-none text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div> */}

          {/* 💬 Comment */}
          <div className="py-4">
            <Input
              name="comment"
              placeholder="Add your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
