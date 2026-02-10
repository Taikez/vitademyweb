"use client";

import { useEffect, useState } from "react";
import { AdminTable } from "./admin-data-table";
import { TableCell, TableRow } from "../ui/table";
import {
  getVitaTestsAction,
  VitaTestWithStats,
} from "@/lib/actions/vitaTestActions";
import Link from "next/link";

export default function VitaTestTable() {
  const [tests, setTests] = useState<VitaTestWithStats[]>([]);

  useEffect(() => {
    getVitaTestsAction().then((res) => {
      if (res.success) setTests(res.tests ?? []);
    });
  }, []);

  return (
    <AdminTable
      caption="A list of your tests."
      columns={[
        { key: "title", label: "Title" },
        { key: "status", label: "Status" },
        { key: "duration", label: "Duration" },
        { key: "questions", label: "Questions" },
        { key: "attempts", label: "Attempts" },
      ]}
      data={tests}
      renderRow={(t) => (
        <TableRow key={t.id}>
          <TableCell>
            <Link href={`/admin/manageVitaTEST/${t.id}`}>{t.title}</Link>
          </TableCell>
          <TableCell>{t.status}</TableCell>
          <TableCell>{t.durationMinutes ?? "—"} min</TableCell>
          <TableCell>
            <Link
              href={`/admin/manageVitaTEST/${t.id}/questions`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t._count.questions} questions
            </Link>
          </TableCell>
          <TableCell>{t._count.attempts}</TableCell>
        </TableRow>
      )}
    />
  );
}
