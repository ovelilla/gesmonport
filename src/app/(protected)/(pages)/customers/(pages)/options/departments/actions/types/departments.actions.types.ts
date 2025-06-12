// Types
import type { Department } from "../../types/departments.types";
import type { DepartmentSchema } from "../../schemas/types/department.schema.types";

type CreateDepartmentProps = {
  values: DepartmentSchema;
};

type CreateDepartmentReturn = {
  client?: Department;
  error?: string;
  success?: string;
};

type DeleteDepartmentProps = {
  id: string;
};

type DeleteDepartmentReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleDepartmentsProps = {
  ids: string[];
};

type DeleteMultipleDepartmentsReturn = {
  success?: string;
  error?: string;
};

type ReadDepartmentsReturn = Department[];

type UpdateDepartmentProps = {
  id: string;
  values: DepartmentSchema;
};

type UpdateDepartmentReturn = {
  client?: Department;
  error?: string;
  success?: string;
};

export type {
  CreateDepartmentProps,
  CreateDepartmentReturn,
  DeleteDepartmentProps,
  DeleteDepartmentReturn,
  DeleteMultipleDepartmentsProps,
  DeleteMultipleDepartmentsReturn,
  ReadDepartmentsReturn,
  UpdateDepartmentProps,
  UpdateDepartmentReturn,
};
