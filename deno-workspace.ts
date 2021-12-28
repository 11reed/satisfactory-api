import { DenoWorkspace } from 'https://denopkg.com/BentoumiTech/denox/src/interfaces.ts';

const workspace: DenoWorkspace = {
  "scripts": {
    "dev": {
      "file": "./src/index.ts",
      "deno_options": {
        "allow-net": "localhost"
      },
    },
  },
};

export { workspace };