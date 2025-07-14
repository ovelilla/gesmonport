// Types
import type { Metadata } from "next";

type ModelPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { ModelPageProps, GenerateMetadataProps, GenerateMetadataReturn };
