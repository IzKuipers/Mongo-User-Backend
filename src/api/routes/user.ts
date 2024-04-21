import { RouteStore } from "../../types/route";
import Create from "./user/create";
import Delete from "./user/delete";
import Token from "./user/token";
import Logoff from "./user/logoff";

export function UserRoute(): RouteStore {
  return [Token, Create, Delete, Logoff];
}
