interface Config {
  /**
   * The project prefix used in Javascript
   * Not in CSS!
   */
  projectPrefix: string
}

export const config: Config = {
  projectPrefix: "sc-staking",
}

export const prefixWithAppPrefix = (key: string) =>
  `${config.projectPrefix}-${key}`
