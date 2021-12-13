import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { PreloadApplication } from "./PreloadApplication";

const app = express();

/**
 * Register all the middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(morgan("dev"));

PreloadApplication().catch((err) => {
  console.error(err);
  process.exit(1);
});

const ApplicationV1 = app;
export default ApplicationV1;
