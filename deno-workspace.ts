import { DenoWorkspace } from "https://denopkg.com/BentoumiTech/denox/src/interfaces.ts";

const workspace: DenoWorkspace = {
  "scripts": {
    "start": {
      "file": "./src/index.ts",
      "deno_options": {
        "allow-net": "localhost"
      }
    },
  },
};

export { workspace };