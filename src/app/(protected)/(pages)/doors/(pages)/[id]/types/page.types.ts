// Types
import type { Metadata } from "next";

type DoorPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { DoorPageProps, GenerateMetadataProps, GenerateMetadataReturn };
