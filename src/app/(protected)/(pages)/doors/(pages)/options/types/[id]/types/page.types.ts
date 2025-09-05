// Types
import type { Metadata } from "next";

type TypePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type { TypePageProps, GenerateMetadataProps, GenerateMetadataReturn };
