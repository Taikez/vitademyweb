// types/vitaTEST/prisma.ts
import { Prisma } from "@prisma/client";

export type VitaTestQuestionWithOptions = Prisma.VitaTestQuestionGetPayload<{
  include: {
    options: true;
  };
}>;
