// Types
import type { Metadata } from "next";

type GlassFinishPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  GlassFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
