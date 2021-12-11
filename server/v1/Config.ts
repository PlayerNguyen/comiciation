import { isDevelopment } from "./Environment";

const DevelopmentConfig = {
  Database: {
    host: process.env.DATABASE_HOST_DEV || "localhost",
    port: parseInt(process.env.DATABASE_PORT_DEV || "3306"),
    user: process.env.DATABASE_USER_DEV || "root",
    password: process.env.DATABASE_PASSWORD_DEV || "",
    database: process.env.DATABASE_NAME_DEV || "test",
  },
  Table: {
    Users: "users",
    Roles: "roles",
    Permissions: "permissions",
    UserRoles: "user_roles",
    RolePermissions: "role_permissions",
    PermissionGroups: "permission_groups",
  },
};

const ProductionConfig = {
  Database: {
    host: process.env.DATABASE_HOST_PROD || "localhost",
    port: parseInt(process.env.DATABASE_PORT_PROD || "3306"),
    user: process.env.DATABASE_USER_PROD || "root",
    password: process.env.DATABASE_PASSWORD_PROD || "",
    database: process.env.DATABASE_NAME_PROD || "test",
  },
  Table: {
    Users: "users",
    Roles: "roles",
    Permissions: "permissions",
    UserRoles: "user_roles",
    RolePermissions: "role_permissions",
    PermissionGroups: "permission_groups",
  },
};

const Config = isDevelopment() ? DevelopmentConfig : ProductionConfig;

export { DevelopmentConfig, ProductionConfig, Config };
