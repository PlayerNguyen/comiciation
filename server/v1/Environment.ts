/**
 * Check whether the current environment is a development environment.
 *
 * @returns Returns whether the current environment is development.
 */
function isDevelopment() {
  return process.env.NODE_ENV === "development";
}

/**
 *  Check whether the current environment is a github actions environment.
 *
 * @returns returns true whether the application is running in github actions environment
 */
function isExecutedGithubActions() {
  return process.env.GITHUB_ACTIONS === "true";
}

export { isDevelopment, isExecutedGithubActions };
