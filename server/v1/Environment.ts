/**
 * Check whether the current environment is a development environment.
 *
 * @returns Returns whether the current environment is development.
 */
function isDevelopment() {
  return process.env.NODE_ENV === "development";
}

export { isDevelopment };
