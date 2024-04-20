import { argon2i, hash, verify } from "argon2";

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, {
    type: argon2i,
    memoryCost: 2 ** 16,
    timeCost: 2,
    hashLength: 16,
  });
}

export async function verifyPassword(password: string, hash: string) {
  return await verify(hash, password);
}
