// Types
import type { Metadata } from "next";

type GlassModelPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  GlassModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
