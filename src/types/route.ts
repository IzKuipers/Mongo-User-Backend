import type { Response, Request } from "express";
import { Method } from "./api";

export interface RouteType {
  method: Method;
  path: string;
  callback: RouteCallback;
}

export type RouteArrayed = [Method, string, RouteCallback];
export type RouteStore = RouteArrayed[];

export type RouteCallback = (req: Request, res: Response) => void;
