"use client";

import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  rows?: number;
  columns?: number;
};

export default function TableSkeleton({ rows = 5, columns = 5 }: Props) {
  return (
    <div className="w-full space-y-3">
      {/* Caption skeleton */}
      <Skeleton className="h-6 w-48" />

      {/* Table */}
      <div className="border rounded-lg">
        {/* Header */}
        <div className="border-b px-4 py-3 flex gap-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" />
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="px-4 py-4 flex gap-4 items-center">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton key={colIndex} className="h-4 flex-1" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
