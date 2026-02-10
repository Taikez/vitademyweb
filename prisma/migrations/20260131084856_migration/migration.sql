-- CreateEnum
CREATE TYPE "VitaTestStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('SINGLE', 'MULTIPLE', 'SCALE', 'TEXT');

-- CreateTable
CREATE TABLE "VitaTest" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "durationMinutes" INTEGER,
    "isTimed" BOOLEAN NOT NULL DEFAULT false,
    "status" "VitaTestStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VitaTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitaTestQuestion" (
    "id" TEXT NOT NULL,
    "VitaTestId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "questionText" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VitaTestQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionOption" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "QuestionOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitaTestTrait" (
    "id" TEXT NOT NULL,
    "VitaTestId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "VitaTestTrait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionScore" (
    "id" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,
    "traitId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "OptionScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitaTestAttempt" (
    "id" TEXT NOT NULL,
    "VitaTestId" TEXT NOT NULL,
    "userId" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "VitaTestAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitaTestAnswer" (
    "id" TEXT NOT NULL,
    "attemptId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "optionId" TEXT,

    CONSTRAINT "VitaTestAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VitaTest_slug_key" ON "VitaTest"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "VitaTestQuestion_VitaTestId_order_key" ON "VitaTestQuestion"("VitaTestId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionOption_questionId_order_key" ON "QuestionOption"("questionId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "VitaTestTrait_VitaTestId_name_key" ON "VitaTestTrait"("VitaTestId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "OptionScore_optionId_traitId_key" ON "OptionScore"("optionId", "traitId");

-- CreateIndex
CREATE INDEX "VitaTestAttempt_VitaTestId_idx" ON "VitaTestAttempt"("VitaTestId");

-- CreateIndex
CREATE UNIQUE INDEX "VitaTestAnswer_attemptId_questionId_key" ON "VitaTestAnswer"("attemptId", "questionId");

-- AddForeignKey
ALTER TABLE "VitaTestQuestion" ADD CONSTRAINT "VitaTestQuestion_VitaTestId_fkey" FOREIGN KEY ("VitaTestId") REFERENCES "VitaTest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionOption" ADD CONSTRAINT "QuestionOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "VitaTestQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitaTestTrait" ADD CONSTRAINT "VitaTestTrait_VitaTestId_fkey" FOREIGN KEY ("VitaTestId") REFERENCES "VitaTest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionScore" ADD CONSTRAINT "OptionScore_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "QuestionOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionScore" ADD CONSTRAINT "OptionScore_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "VitaTestTrait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitaTestAttempt" ADD CONSTRAINT "VitaTestAttempt_VitaTestId_fkey" FOREIGN KEY ("VitaTestId") REFERENCES "VitaTest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitaTestAnswer" ADD CONSTRAINT "VitaTestAnswer_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "VitaTestAttempt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitaTestAnswer" ADD CONSTRAINT "VitaTestAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "VitaTestQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitaTestAnswer" ADD CONSTRAINT "VitaTestAnswer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "QuestionOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
