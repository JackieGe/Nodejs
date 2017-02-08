import * as Koa from 'koa';
import api from './api';
import bodyParser from 'koa-bodyparser';
import * as cors from 'kcors';

const app = new Koa()
    .use(cors())
    .use(async (ctx, next) => {
        ctx.body = "hello koa";
        //await next();
    })
    .use(bodyParser());
//.use(api.routes())
// .use(api.allowedMethods());

export default app;