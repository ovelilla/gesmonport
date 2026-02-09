// Types
import type { Metadata } from "next";

type GlassTypePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  GlassTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
