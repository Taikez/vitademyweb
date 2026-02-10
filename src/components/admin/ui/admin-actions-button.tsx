"use client";

import { cn } from "@/lib/utils";

type Variant = "edit" | "delete" | "restore";

export default function AdminActionsButton({
  variant,
  onClick,
  children,
}: {
  variant: Variant;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const base =
    "px-4 py-2 text-sm rounded text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<Variant, string> = {
    edit: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    delete: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    restore: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
  };

  const defaultLabel = {
    edit: "Edit",
    delete: "Delete",
    restore: "Restore",
  };

  return (
    <button onClick={onClick} className={cn(base, variants[variant])}>
      {children ?? defaultLabel[variant]}
    </button>
  );
}
