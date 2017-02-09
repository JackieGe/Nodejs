import * as Koa from 'koa';
import api from './api';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'kcors';
import * as http from 'http'

http.createServer()

const app = new Koa()
    .use(cors())
    .use(async (ctx, next) => {
        ctx.body = "hello koa";
        await next();
    })
    .use(new bodyParser())
    .use(api.routes())
// .use(api.allowedMethods());
app.listen(3001);
// export default app;