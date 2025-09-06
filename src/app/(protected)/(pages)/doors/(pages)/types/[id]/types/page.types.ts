// Types
import type { Metadata } from "next";

type DoorTypePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  DoorTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
