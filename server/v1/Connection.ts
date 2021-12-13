import knex from "knex";
import { Config } from "./Config";
import { isDevelopment } from "./Environment";

const DatabaseConfig = Config.Database;
/**
 * Database connection
 */
const KnexInstance = knex({
  client: "mysql2",
  connection: DatabaseConfig,
  debug: isDevelopment(),
});

export { KnexInstance };
