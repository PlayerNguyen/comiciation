import { isDevelopment } from "./Environment";

const DevelopmentConfig = {
  Database: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "test",
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
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "test",
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
