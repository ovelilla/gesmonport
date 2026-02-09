// Types
import type { Metadata } from "next";

type FrameFinishPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  FrameFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
