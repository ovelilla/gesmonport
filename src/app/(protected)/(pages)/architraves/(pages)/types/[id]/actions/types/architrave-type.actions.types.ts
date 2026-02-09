// Types
import type {
  ArchitraveType,
  ArchitraveTypePrice,
} from "../../types/architrave-type.types";

type ReadArchitraveTypeProps = {
  id: string;
};

type ReadArchitraveTypeReturn = ArchitraveType | null;

type SaveArchitraveTypePricesProps = {
  architraveTypeId: string;
  prices: Pick<ArchitraveTypePrice, "height" | "width" | "price">[];
};

type SaveArchitraveTypePricesReturn = {
  prices?: ArchitraveTypePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadArchitraveTypeProps,
  ReadArchitraveTypeReturn,
  SaveArchitraveTypePricesProps,
  SaveArchitraveTypePricesReturn,
};
