// Types
import type { Metadata } from "next";

type FrameFamilyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  FrameFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
