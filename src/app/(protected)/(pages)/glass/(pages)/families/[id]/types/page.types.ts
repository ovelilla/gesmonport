// Types
import type { Metadata } from "next";

type GlassFamilyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  GlassFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
