import { randomUUID } from "crypto";
import { Token, Tokens } from "../../types/model/token";
import { User } from "../../types/model/user";
import { getUserById, getUserByName } from "../user/get";

export async function getUserByToken(token: string): Promise<null | User> {
  const tokenDoc = await Tokens.findOne<Token>({ value: token });

  if (!tokenDoc) return null;

  return await getUserById(tokenDoc.userId);
}

export async function generateToken(username: string) {
  const user = await getUserByName(username);

  if (!user) return "";

  const newDoc = await Tokens.create({
    userId: user.id,
    value: randomUUID(),
  });

  return newDoc.value;
}

export async function discontinueToken(token: string) {
  return await Tokens.deleteOne({ value: token });
}

export async function deleteUserTokens(username: string) {
  const user = await getUserByName(username);

  if (!user) return;

  await Tokens.deleteMany({ userId: user.id });
}
