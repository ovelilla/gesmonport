// Types
import type { Metadata } from "next";

type FinishPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { FinishPageProps, GenerateMetadataProps, GenerateMetadataReturn };
