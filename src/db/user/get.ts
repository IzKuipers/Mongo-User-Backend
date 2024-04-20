import { User, Users } from "../../types/model/user";

export async function getUserByName(username: string) {
  try {
    const user = await Users.findOne({ username });

    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  const user = await Users.findById<User>(id);

  return user || null;
}
