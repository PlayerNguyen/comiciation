import * as express from "express";
import ApplicationV1 from "./v1/Application";
const app = express();

/**
 * Application version
 */
app.use("/v1", ApplicationV1);

/**
 * Listen application
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.group(`Preferences: `);
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Version: ${process.version}`);
  console.groupEnd();
});
