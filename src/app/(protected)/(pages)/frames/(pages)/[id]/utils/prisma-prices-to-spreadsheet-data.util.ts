// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FramePrice } from "../types/frame.types";

type PrismaPricesToSpreadsheetDataProps = {
  prices: FramePrice[];
};

type PrismaPricesToSpreadsheetDataReturn = Matrix<CellBase>;

const prismaPricesToSpreadsheetData = ({
  prices,
}: PrismaPricesToSpreadsheetDataProps): PrismaPricesToSpreadsheetDataReturn => {
  const uniqueHeights = Array.from(new Set(prices.map((p) => p.height))).sort(
    (a, b) => a - b,
  );
  const uniqueWidths = Array.from(new Set(prices.map((p) => p.width))).sort(
    (a, b) => a - b,
  );

  const data: CellBase[][] = [];

  data.push([
    { value: "", readOnly: true },
    ...uniqueHeights.map((h) => ({ value: h.toString() })),
  ]);

  for (const width of uniqueWidths) {
    const row: CellBase[] = [{ value: width.toString() }];

    for (const height of uniqueHeights) {
      const price = prices.find(
        (p) => p.width === width && p.height === height,
      );
      row.push({ value: price ? price.price.toString() : "" });
    }

    data.push(row);
  }

  return data;
};

export { prismaPricesToSpreadsheetData };
