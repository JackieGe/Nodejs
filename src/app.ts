import * as Koa from 'koa';
import api from './api';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'kcors';
import * as http from 'http'
import * as path from 'path'
import * as staticServer from 'koa-static'

const publicFolder = path.join(process.cwd(), 'public')
console.log(`public folder = ${publicFolder}`)

const app = new Koa()
    .use(cors())
    .use(staticServer(publicFolder))
    .use(new bodyParser())
    .use(api.routes())
    .use(api.allowedMethods());
export default app;