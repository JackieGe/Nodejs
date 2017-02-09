import * as Koa from 'koa';
import api from './api';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'kcors';
import * as http from 'http'

const app = new Koa()
    .use(cors())
    .use(new bodyParser())
    .use(api.routes())
    .use(api.allowedMethods());
export default app;