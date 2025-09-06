type GetItemPrice = <
  TItem extends { id: string; prices: TPrice[] },
  TPrice extends { width: number; height: number; price: number },
>(params: {
  items: TItem[];
  id: string;
  width: number;
  height: number;
}) => number | null;

type SumPrices = (...prices: Array<number | null>) => number;

type ToSelectItems = <T extends { id: string; name: string }>(params: {
  items: T[];
}) => { value: string; label: string }[];

export type { GetItemPrice, SumPrices, ToSelectItems };
