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

  if (!item) {
    return null;
  }

  const exact = item.prices.find(
    (p) => p.width === width && p.height === height,
  );

  if (exact) {
    return exact.price;
  }

  const candidates = item.prices
    .filter((p) => p.width >= width && p.height >= height)
    .sort((a, b) => a.width - b.width || a.height - b.height);

  return candidates.length > 0 ? candidates[0].price : null;
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
