import { verifyPassword } from "../../password";
import { getUserByName } from "./get";

export async function authenticateUser(username: string, password: string) {
  const user = await getUserByName(username);

  if (!user) return false;

  return await verifyPassword(password, user.passwordHash);
}
