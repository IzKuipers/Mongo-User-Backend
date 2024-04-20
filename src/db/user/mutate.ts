import { verify } from "argon2";
import { hashPassword } from "../../password";
import { Users } from "../../types/model/user";
import { getUserByName } from "./get";
import { deleteUserTokens } from "../token";

export async function createUser(username: string, password: string) {
  const doc = await Users.create({
    username,
    passwordHash: await hashPassword(password),
  });

  return doc;
}

export async function deleteUser(username: string) {
  const user = await getUserByName(username);

  if (!user) return false;

  const result = await Users.deleteOne({ _id: user._id });

  if (result.acknowledged) {
    await deleteUserTokens(username);
    return;
  }

  return result.acknowledged;
}

export async function renameUser(oldUsername: string, newUsername: string) {
  const user = await getUserByName(oldUsername);

  if (!user) return false;

  const result = await user.updateOne({
    username: newUsername,
  });

  return !!result;
}

export async function changeUserPassword(
  username: string,
  oldPassword: string,
  newPassword: string
) {
  const user = await getUserByName(username);

  if (!user) return false;

  const oldIsValid = await verify(user.passwordHash, oldPassword);

  if (!oldIsValid) return false;

  const result = await user?.updateOne({
    passwordHash: await hashPassword(newPassword),
  });

  return !!result;
}
