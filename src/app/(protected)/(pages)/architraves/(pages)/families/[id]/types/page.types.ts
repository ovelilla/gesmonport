// Types
import type { Metadata } from "next";

type ArchitraveFamilyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  ArchitraveFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
