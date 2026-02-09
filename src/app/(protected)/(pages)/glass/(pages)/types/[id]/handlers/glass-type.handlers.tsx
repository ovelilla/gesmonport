// Vendors
import { toast } from "sonner";
// Actions
import { saveGlassTypePrices } from "../actions/glass-type.actions";
// Types
import type {
  GlassTypeHandlersProps,
  GlassTypeHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
} from "./types/glass-type.handlers.types";
// Utils
import { spreadsheetDataToPrismaPrices } from "../utils/spreadsheet-data-to-prisma-prices.util";
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const addRowHandler = ({ data, setData }: AddRowHandlerProps): void => {
  if (!data.length) return;

  const columnCount = data[0].length;
  const newRow = Array.from({ length: columnCount }, () => ({ value: "" }));

  setData((prevData) => [...prevData, newRow]);
};

const addColumnHandler = ({ data, setData }: AddColumnHandlerProps): void => {
  if (!data.length) return;

  const newData = data.map((row) => [...row, { value: "" }]);
  setData(newData);
};

const deleteRowHandler = ({ data, setData }: DeleteRowHandlerProps): void => {
  if (data.length <= 1) return;

  setData(data.slice(0, -1));
};

const deleteColumnHandler = ({
  data,
  setData,
}: DeleteColumnHandlerProps): void => {
  if (!data.length || data[0].length <= 1) return;

  const newData = data.map((row) => row.slice(0, -1));
  setData(newData);
};

const savePricesHandler = async ({
  data,
  glassType,
  setData,
  setLoading,
  setOriginalData,
}: SavePricesHandlerProps): Promise<void> => {
  setLoading(true);

  const parsedPrices = spreadsheetDataToPrismaPrices({ data });

  try {
    const { prices, error, success } = await saveGlassTypePrices({
      glassTypeId: glassType.id,
      prices: parsedPrices,
    });

    if (error) {
      toast.error(error);
      return;
    }

    if (success && prices) {
      const parsedData = prismaPricesToSpreadsheetData({ prices });
      setData(parsedData);
      setOriginalData(parsedData);
      toast.success(success);
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al crear los precios. Por favor, inténtalo de nuevo");
  } finally {
    setLoading(false);
  }
};

const GlassTypeHandlers = ({
  data,
  glassType,
  setData,
  setLoading,
  setOriginalData,
}: GlassTypeHandlersProps): GlassTypeHandlersReturn => {
  return {
    handleAddRow: () => addRowHandler({ data, setData }),
    handleAddColumn: () => addColumnHandler({ data, setData }),
    handleDeleteRow: () => deleteRowHandler({ data, setData }),
    handleDeleteColumn: () => deleteColumnHandler({ data, setData }),
    handleSavePrices: () =>
      savePricesHandler({
        data,
        glassType,
        setData,
        setLoading,
        setOriginalData,
      }),
  };
};

export { GlassTypeHandlers };
