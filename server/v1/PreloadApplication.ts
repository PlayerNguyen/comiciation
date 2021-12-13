import { setupDatabase } from "./Database";
import { setupPermission } from "./Permission";

const PreloadApplication = async () => {
  /**
   * Database calls
   */
  await setupDatabase();
  /**
   * Then, setup permissions
   */
  await setupPermission();
};

export { PreloadApplication };
