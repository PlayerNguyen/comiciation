import { Config } from "../Config";
import { KnexInstance } from "../Connection";

/**
 * Check whether the permission group exists.
 * @param name a permission group name.
 * @returns true whether the group exists, false otherwise.
 */
async function hasPermissionGroup(name: string) {
  return (
    (await KnexInstance(Config.Table.PermissionGroups)
      .select()
      .where({ name })
      .first()) !== undefined
  );
}

/**
 * Create new permission group.
 * @param id a permission group id.
 * @param name a name of permission group.
 * @param description a description of the permission group.
 */
async function createPermissionGroup(
  id: number,
  name: string,
  description: string
) {
  if (await hasPermissionGroup(name)) {
    throw new Error("Permission group already exists.");
  }
  await KnexInstance(Config.Table.PermissionGroups).insert({
    id,
    name,
    description,
  });
}

const PermissionGroupController = {
  hasPermissionGroup,
  createPermissionGroup,
};
export { PermissionGroupController };
