const DEFAULT_FORM_VALUES = {
  name: "",
  description: "",
  reference: "",
  heightOffset: 0,
  familyId: "",
  finishId: "",
  typeId: "",
  glass: [] as string[],
  images: [] as File[],
} as const;

export { DEFAULT_FORM_VALUES };
