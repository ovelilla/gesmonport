// Types
import type { Metadata } from "next";

type ArchitraveFinishPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  ArchitraveFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
