import { KnexInstance } from "./Connection";
import { Knex } from "knex";
import chalk = require("chalk");
import { Config } from "./Config";

/**
 * Generate new table whether not exists.
 * @param name a name of the table
 * @param callback a callback function to generate the table
 *
 */
async function generateTable(
  name: string,
  callback: (tableBuilder: Knex.CreateTableBuilder) => any
) {
  // Whether the table has not existed, create it
  if (!(await KnexInstance.schema.hasTable(name))) {
    console.log(`Generating table named ${chalk.yellow(name)}...`);
    await KnexInstance.schema.createTable(name, callback);
  }
}

async function setupDatabase() {
  console.group(`Database: `);
  /**
   * User table generate
   */
  await generateTable(Config.Table.Users, (table) => {
    table.increments("id").primary().notNullable();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable();
    table.string("nickname").notNullable();
    table.integer("role").notNullable();
    table.timestamp("registeredAt").defaultTo(KnexInstance.fn.now());
  });
  /**
   * Role generate
   */
  await generateTable(Config.Table.Roles, (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
  });
  /**
   * Role permission generate
   */
  await generateTable(Config.Table.RolePermissions, (table) => {
    table.increments("id").primary().notNullable();
    table.integer("roleId").notNullable();
    table.integer("permissionId").notNullable();
  });
  /**
   * Permission generate
   */
  await generateTable(Config.Table.Permissions, (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
  });
  /**
   * Permission group generate
   */
  await generateTable(Config.Table.PermissionGroups, (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
  });
  console.groupEnd();
}

export { setupDatabase };
