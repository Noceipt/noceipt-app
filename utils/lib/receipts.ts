import { server } from "./server";

export const getLogin = async (data: { email: string; password: string }) =>
  server.post("auth/login", data);

export const getReceipts = async (authToken: string) =>
  server.get("receipt", { headers: { Authorization: `Bearer ${authToken}` } });
