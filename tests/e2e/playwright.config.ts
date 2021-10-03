import { PlaywrightTestConfig } from "@playwright/test";
import { resolve } from "path";

export const port = 3001;
export const fixtureFolder = resolve(__dirname, "__fixture__");
export const getUrl = (path = "/") => `http://localhost:${port}${path}`;

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./__config__/globalSetup.ts"),
  webServer: {
    command: `ws -z -d ${fixtureFolder} -p ${port}`,
    port,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
