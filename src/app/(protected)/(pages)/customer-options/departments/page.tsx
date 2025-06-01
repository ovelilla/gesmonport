// Actions
import { readDepartments } from "./actions/departments.actions";
// Containers
import { DepartmentsContainer } from "./departments.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departamentos",
  description: "Página de departamentos",
};

const DepartmentsPage = async () => {
  const departments = await readDepartments();
  return <DepartmentsContainer departments={departments} />;
};

export default DepartmentsPage;
