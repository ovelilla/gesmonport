// Types
import type { Metadata } from "next";

type ContactsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type GenerateMetadataProps = {
  params: Promise<{ id: string }>;
};

type GenerateMetadataReturn = Promise<Metadata>;

export type {
  ContactsPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
};
