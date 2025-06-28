import {
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveFamilyImage,
} from "@prisma/client";

type Family = PrismaArchitraveFamily & { images: ArchitraveFamilyImage[] };

export type { Family };
