import knex from "knex";
import { Config } from "./Config";

const DatabaseConfig = Config.Database;
/**
 * Database connection
 */
const KnexInstance = knex({
  client: "mysql2",
  connection: DatabaseConfig,
});

export { KnexInstance };
