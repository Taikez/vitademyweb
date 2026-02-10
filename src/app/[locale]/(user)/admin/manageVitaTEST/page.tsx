"use client";

import VitaTestTable from "@/components/admin/vita-test-table";
import { Button } from "@/components/ui/Button";
import React from "react";

export default function ManageVitaTest() {
  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage VitaTEST</h1>
        <Button
          className="bg-blue-500 text-white px-5 py-3 rounded border-0"
          onClick={() =>
            (window.location.href = "/admin/manageVitaTEST/create")
          }
        >
          Add New VitaTest
        </Button>
      </div>
      <VitaTestTable></VitaTestTable>
    </div>
  );
}
