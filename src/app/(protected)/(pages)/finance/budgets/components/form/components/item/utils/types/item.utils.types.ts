// Types
import type { Hardware } from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";

type GetDoorExtrasTotal = (params: {
  doorExtraIds: string[];
  doorExtras: { id: string; price: number }[];
}) => number;

type GetHardwaresTotal = (params: {
  hardwareItems: BudgetSchema["items"][number]["hardwareItems"];
  hardwares: Hardware[];
}) => number;

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

type RelationItem = { id: string; name: string };

type EntityWithRelations<R extends string> = {
  id: string;
} & {
  [K in R]: RelationItem[];
};

type ToSelectItemsFromRelation = <R extends string>(args: {
  items: EntityWithRelations<R>[];
  parentId: string | null | undefined;
  relationKey: R;
}) => { value: string; label: string }[];

export type {
  GetDoorExtrasTotal,
  GetHardwaresTotal,
  GetItemPrice,
  SumPrices,
  ToSelectItems,
  ToSelectItemsFromRelation,
};
