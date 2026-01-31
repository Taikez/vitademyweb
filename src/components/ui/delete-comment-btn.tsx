import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Trash2 } from "lucide-react";

type Props = {
  onConfirm: () => void;
  pending?: boolean;
};

export default function DeleteCommentButton({ onConfirm, pending }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          disabled={pending}
          className="ml-auto text-muted-foreground hover:text-red-600 disabled:opacity-50"
          aria-label="Delete comment"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this comment?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Your comment will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={pending}
            className="bg-red-600 hover:bg-red-700"
          >
            {pending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
