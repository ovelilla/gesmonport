// Types
import type { Metadata } from "next";

type FrameTypePageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  FrameTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
