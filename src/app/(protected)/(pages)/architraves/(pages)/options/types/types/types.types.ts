import {
  ArchitraveType as PrismaArchitraveType,
  ArchitraveTypeImage,
} from "@prisma/client";

type Type = PrismaArchitraveType & { images: ArchitraveTypeImage[] };

export type { Type };
