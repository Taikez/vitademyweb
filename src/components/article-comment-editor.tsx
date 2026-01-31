"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import {
  ArticleCommentsWithRelations,
  createArticleCommentAction,
} from "@/lib/actions/articleActions";
import { Placeholder } from "@tiptap/extensions";
import Link from "next/link";

type Props = {
  articleSlug: string;
  onCommentAdded: (comment: ArticleCommentsWithRelations) => void;
};

export default function CommentEditor({ articleSlug, onCommentAdded }: Props) {
  const { data: session } = useSession();
  const [expanded, setExpanded] = useState(false);
  const [pending, setPending] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Add a comment…",
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none min-h-[80px]",
      },
    },
    onFocus: () => setExpanded(true),
    immediatelyRender: false,
  });

  if (!session) {
    return (
      <Link href="/login">
        <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
          Sign in to join the discussion
        </div>
      </Link>
    );
  }

  async function handleSubmit() {
    if (!editor) return;

    const content = editor.getHTML();

    if (editor.isEmpty) {
      toast.error("Comment cannot be empty");
      return;
    }

    setPending(true);
    const result = await createArticleCommentAction({
      articleSlug,
      content,
    });
    setPending(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    if (result?.success) {
      toast.success("Comment posted");
      editor.commands.clearContent();
      onCommentAdded(result.comment);
    }
    setExpanded(false);
  }

  function handleCancel() {
    editor?.commands.clearContent();
    setExpanded(false);
  }

  return (
    <div
      className={`rounded-lg border transition-colors ${
        expanded ? "border-primary" : "border-gray-400"
      }`}
    >
      <EditorContent editor={editor} className="p-4" />

      {expanded && (
        <div className="flex justify-end gap-2 border-t bg-muted/30 px-4 py-2">
          <Button variant="ghost" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSubmit} disabled={pending}>
            {pending ? "Posting..." : "Post comment"}
          </Button>
        </div>
      )}
    </div>
  );
}
