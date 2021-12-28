import { bold, yellow } from 'https://deno.land/std@0.118.0/fmt/colors.ts';
import { Application, Context, Router, isHttpError } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

import all from './data/allData.ts';
import belts from './data/beltsData.ts';
import buildings from './data/buildingsData.ts';
import items from './data/itemsData.ts';
import miners from './data/minersData.ts';
import resources from './data/resourcesData.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors({origin: '*'}));

app.use(async (ctx: Context, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      ctx.response.status = err.status;
      if (ctx.request.accepts('json')) {
        ctx.response.body = err;
        ctx.response.type = 'json';
      } else {
        console.log(err);
        throw err;
      }
    }
  }
});

router.use(async (ctx: Context, next) => {
  await next();
  const responseTime = ctx.response.headers.get('X-Response-Time');
  console.log(responseTime);
});

router.use(async (ctx: Context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

router.get('/all', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(all));
});

router.get('/belts', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(belts));
});

router.get('/buildings', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(buildings));
});

router.get('/items', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(items));
});

router.get('/miners', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(miners));
});

router.get('/resources', (ctx: Context) => {
  ctx.response.body = JSON.parse(JSON.stringify(resources));
});

app.addEventListener('listen', ({hostname, port, serverType}) => {
  console.log(
    bold('Server: ') + yellow(`${hostname}:${port}`),
  );
  console.log(bold('Server Type: ' + yellow(serverType)));
});

await app.listen({hostname: '127.0.0.1', port: 8000});