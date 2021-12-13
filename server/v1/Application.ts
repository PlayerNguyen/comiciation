import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { setupDatabase } from "./Database";
import { setupPermission } from "./Permission";
const app = express();

/**
 * Register all the middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(morgan("dev"));

const main = async () => {
  /**
   * Database calls
   */
  await setupDatabase();
  /**
   * Then, setup permissions
   */
  await setupPermission();
};
main();

const ApplicationV1 = app;
export default ApplicationV1;
