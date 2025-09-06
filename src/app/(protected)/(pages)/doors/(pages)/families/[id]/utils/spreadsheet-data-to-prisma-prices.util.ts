// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorFamilyPrice } from "../types/door-family.types";

type SpreadsheetDataToPrismaPricesProps = {
  data: Matrix<CellBase>;
};

type SpreadsheetDataToPrismaPricesReturn = Pick<
  DoorFamilyPrice,
  "width" | "height" | "price"
>[];

const spreadsheetDataToPrismaPrices = ({
  data,
}: SpreadsheetDataToPrismaPricesProps): SpreadsheetDataToPrismaPricesReturn => {
  const prices: SpreadsheetDataToPrismaPricesReturn = [];

  if (!data.length || data[0].length < 2 || data.length < 2) {
    return prices;
  }

  for (let row = 1; row < data.length; row++) {
    const widthCell = data[row][0];
    const width = parseFloat(widthCell?.value ?? "");

    if (isNaN(width)) continue;

    for (let col = 1; col < data[0].length; col++) {
      const heightCell = data[0][col];
      const height = parseFloat(heightCell?.value ?? "");
      const priceCell = data[row][col];
      const price = parseFloat(priceCell?.value ?? "");

      if (!isNaN(height) && !isNaN(price)) {
        prices.push({ width, height, price });
      }
    }
  }

  return prices;
};

export { spreadsheetDataToPrismaPrices };
