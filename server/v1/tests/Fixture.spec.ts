import * as os from "os";
import { Config } from "../Config";
import { isExecutedGithubActions } from "../Environment";
import { PreloadApplication } from "../PreloadApplication";
export async function mochaGlobalSetup() {
  console.group(`Mocha performance test`);
  console.log(`System: ${os.platform()}`);
  console.log(`CPU: ${os.cpus()[0].model}`);
  console.log(`Memory: ${os.totalmem() / 1024 / 1024} MB`);
  console.log(`Node: ${process.version}`);
  console.log(`V8: ${process.versions.v8}`);
  console.log(`NPM: ${process.versions.npm}`);
  console.log(`Mocha: ${process.versions.mocha}`);
  console.log(`Chai: ${process.versions.chai}`);
  console.log(`Node environment : ${process.env.NODE_ENV}`);
  console.groupEnd();

  if (!isExecutedGithubActions()) {
    console.group(`Database configuration`);
    console.log(`Database host: ${Config.Database.database}`);
    console.log(`Database port: ${Config.Database.port}`);
    console.log(`Database user: ${Config.Database.user}`);
    console.log(`Database password: ${Config.Database.password}`);
    console.log(`Database name: ${Config.Database.database}`);
    console.groupEnd();
  }

  

  console.group(`Server preload running`);
  console.log(`Server preload running`);
  /**
   * Load application before running application
   */
  await PreloadApplication();
  console.groupEnd();
}
