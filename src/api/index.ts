import express from "express";
import multer from "multer";
import { PORT } from "../env";
import { Method } from "../types/api";
import { RouteCallback, RouteStore, RouteType } from "../types/route";
import { UserRoute } from "./routes/user";

export const Assigned: string[] = [];
export let App = express();

export function StartServer() {
  App;

  App.listen(PORT, () => {
    assignRoutes(UserRoute());
  });
}

export function assignRoute(route: RouteType) {
  const fun = MethodTranslations()[route.method];

  if (!fun || Assigned.includes(route.path)) return false;

  Assigned.push(route.path);

  fun(route.path, multer().none(), route.callback);

  console.log(
    `API: Loaded API endpoint ${
      route.path
    } on method ${route.method.toUpperCase()}`
  );

  return true;
}

export function assignRoutes(routes: RouteStore) {
  for (const [method, path, callback] of routes) {
    const created = assignRoute({ method, path, callback });

    if (!created)
      console.warn(`Warning: failed to assign ${method} -> ${path}`);
  }
}

export function Route(
  method: Method,
  path: string,
  callback: RouteCallback
): RouteType {
  console.log(`${method} -> ${path}`);

  return { method, path, callback };
}

export function MethodTranslations(): Record<Method, (...args: any[]) => any> {
  return {
    get: App.get.bind(App),
    post: App.post.bind(App),
    options: App.options.bind(App),
    delete: App.delete.bind(App),
    put: App.put.bind(App),
    all: App.all.bind(App),
    patch: App.patch.bind(App),
    head: App.head.bind(App),
  };
}
