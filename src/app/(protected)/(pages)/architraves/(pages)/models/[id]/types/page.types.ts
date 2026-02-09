// Types
import type { Metadata } from "next";

type ArchitraveModelPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  ArchitraveModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
