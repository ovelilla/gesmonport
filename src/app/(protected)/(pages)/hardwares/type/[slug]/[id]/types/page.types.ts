// Types
import type { Metadata } from "next";

type HardwarePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  HardwarePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
