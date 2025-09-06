// Types
import type { Metadata } from "next";

type DoorFamilyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  DoorFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
