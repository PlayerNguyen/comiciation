import chalk = require("chalk");
import { PermissionGroupController } from "./controller/PermissionGroupController";
import { PermissionGroup } from "./interface/PermissionGroup";

/**
 * Represent permission group type.
 */
enum PermissionGroupType {
  USER = 1,
  ADMIN,
  SYSTEM,
}

const PermissionGroupDefault: PermissionGroup[] = [
  {
    id: PermissionGroupType.USER,
    name: "User",
    description: "User permission group",
  },
  {
    id: PermissionGroupType.ADMIN,
    name: "Admin",
    description: "Admin permission group",
  },
  {
    id: PermissionGroupType.SYSTEM,
    name: "System",
    description: "System permission group",
  },
];

async function generatePermissionGroup(
  id: number,
  name: string,
  description: string
) {
  if (!(await PermissionGroupController.hasPermissionGroup(name))) {
    console.log(`Generating permission group ${chalk.yellow(name)}...`);
    await PermissionGroupController.createPermissionGroup(
      id,
      name,
      description
    );
  }
}

/**
 * Setup permission.
 */
async function setupPermission() {
  /**
   * Generate permission group
   */
  console.group(`Permission group`);
  PermissionGroupDefault.forEach(async (permissionGroup) => {
    await generatePermissionGroup(
      permissionGroup.id,
      permissionGroup.name,
      permissionGroup.description
    );
  });
  console.groupEnd();
}

export { setupPermission, PermissionGroupDefault, PermissionGroupType };
