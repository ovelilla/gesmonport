// Actions
import { readUsers } from "./actions/users.actions";
// Components
import { UsersContainer } from "./users.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Página de usuarios",
};

const UsersPage = async () => {
  const users = await readUsers();
  return <UsersContainer users={users} />;
};

export default UsersPage;
