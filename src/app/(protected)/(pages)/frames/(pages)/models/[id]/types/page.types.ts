// Types
import type { Metadata } from "next";

type FrameModelPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  FrameModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
