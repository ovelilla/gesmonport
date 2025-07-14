// Types
import type { Metadata } from "next";

type FamilyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { FamilyPageProps, GenerateMetadataProps, GenerateMetadataReturn };
