const DEFAULT_FORM_VALUES = {
  name: "",
  email: "",
  phone: "",
  billingAddress: "",
  shippingAddress: "",
  vatNumber: "",
  iban: "",
  notes: "",
  discountDoor: 0,
  discountParts: 0,
  paymentMethod: "NOT_SPECIFIED",
} as const;

export { DEFAULT_FORM_VALUES };
