// Types
import type {
  GetDoorExtrasTotal,
  GetHardwaresTotal,
  GetItemPrice,
  SumPrices,
  ToSelectItems,
  ToSelectItemsFromRelation,
} from "./types/item.utils.types";

const getDoorExtrasTotal: GetDoorExtrasTotal = ({
  doorExtraIds,
  doorExtras,
}) => {
  return doorExtraIds.reduce((acc, extraId) => {
    const extra = doorExtras.find((de) => de.id === extraId);
    return extra ? acc + (extra.price ?? 0) : acc;
  }, 0);
};

const getHardwaresTotal: GetHardwaresTotal = ({ hardwareItems, hardwares }) => {
  return hardwareItems.reduce((acc, hardwareItem) => {
    if (!hardwareItem.hardwareId || !hardwareItem.quantity) return acc;

    const hardware = hardwares.find(
      (hardware) => hardware.id === hardwareItem.hardwareId,
    );

    if (!hardware) return acc;

    return acc + (hardware.price ?? 0) * hardwareItem.quantity;
  }, 0);
};

const getItemPrice: GetItemPrice = ({ items, id, width, height }) => {
  if (!width || !height) {
    return null;
  }

  const item = items.find((i) => i.id === id);

  if (!item || item.prices.length === 0) {
    return null;
  }

  const widths = item.prices.map((p) => p.width);
  const heights = item.prices.map((p) => p.height);

  const minW = Math.min(...widths);
  const maxW = Math.max(...widths);
  const minH = Math.min(...heights);
  const maxH = Math.max(...heights);

  const w = Math.min(Math.max(width, minW), maxW);
  const h = Math.min(Math.max(height, minH), maxH);

  const exact = item.prices.find((p) => p.width === w && p.height === h);

  if (exact) {
    return exact.price;
  }

  const candidates = item.prices
    .filter((p) => p.width >= w && p.height >= h)
    .sort((a, b) => a.width - b.width || a.height - b.height);

  return candidates[0]?.price ?? null;
};

const sumPrices: SumPrices = (...prices) =>
  prices.reduce<number>((acc, price) => acc + (price ?? 0), 0);

const toSelectItems: ToSelectItems = ({ items }) =>
  items.map((item) => ({
    value: item.id,
    label: item.name,
  }));

const toSelectItemsFromRelation: ToSelectItemsFromRelation = ({
  items,
  parentId,
  relationKey,
}) =>
  items
    .find((i) => i.id === parentId)
    ?.[relationKey].map((rel) => ({
      value: rel.id,
      label: rel.name,
    })) ?? [];

export {
  getDoorExtrasTotal,
  getHardwaresTotal,
  getItemPrice,
  sumPrices,
  toSelectItems,
  toSelectItemsFromRelation,
};
