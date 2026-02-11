/*
  Warnings:

  - Added the required column `createdById` to the `VitaTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VitaTest" ADD COLUMN     "createdById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "VitaTest" ADD CONSTRAINT "VitaTest_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
