// Types
import type { Metadata } from "next";

type ArchitravePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  ArchitravePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
