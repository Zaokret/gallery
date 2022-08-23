import cors from "cors";
import settings from "../lib/settings";

const urlsAllowedToAccess =
  Object.entries(settings.urls || {}).map(([key, value]) => value) || [];

export const configuration = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
};

export default (req, res, next) => {
  return cors(configuration)(req, res, next);
};
