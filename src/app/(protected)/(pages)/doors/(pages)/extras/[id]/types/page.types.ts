// Types
import type { Metadata } from "next";

type ExtraPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { ExtraPageProps, GenerateMetadataProps, GenerateMetadataReturn };
