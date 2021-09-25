import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";
import { Cors } from "https://deno.land/x/drash_middleware@v0.7.9/cors/mod.ts";

import all from './routes/all.ts';
import belts from './routes/belts.ts';
import buildings from './routes/buildings.ts';
import items from './routes/items.ts';
import miners from './routes/miners.ts';
import resources from './routes/resources.ts';

const server = new Drash.Http.Server({
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "debug",
  }),
  middleware: {
    after_request: [
      Cors(),
    ],
  },
  response_output: "application/json",
  resources: [all, belts, buildings, items, miners, resources]
});

server.run({
  hostname: "localhost",
  port: 8080
});

console.log(`Server running at ${server.hostname}:${server.port}`);