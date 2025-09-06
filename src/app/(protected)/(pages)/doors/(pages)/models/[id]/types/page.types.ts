// Types
import type { Metadata } from "next";

type DoorModelPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  DoorModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
