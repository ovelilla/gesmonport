// Types
import type { Metadata } from "next";

type DoorFinishPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  DoorFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
