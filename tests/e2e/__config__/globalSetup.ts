import { exec as execSync } from "child_process";
import { promisify } from "util";
import { copy } from "fs-extra";
import { resolve } from "path";

const exec = promisify(execSync);

async function globalSetup() {
  if (!process.env.CI) {
    await exec("npm run build");
  }
  await copy(
    resolve(process.cwd(), "dist"),
    resolve(process.cwd(), "tests/e2e/__fixture__/app"),
    {
      filter: (src) => !src.includes(".d.ts"),
    }
  );
}
export default globalSetup;
