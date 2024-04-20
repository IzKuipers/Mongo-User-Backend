import { StartServer } from "./api";
import { startDB } from "./db/start";

export async function Initialize() {
  await startDB();
  StartServer();
}

Initialize();
