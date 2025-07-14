// Types
import type { Metadata } from "next";

type GlassPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { GlassPageProps, GenerateMetadataProps, GenerateMetadataReturn };
