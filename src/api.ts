import * as KoaRouter from 'koa-router';
import contactRouter from './routers/contact_router'

const api = new KoaRouter();
api.use('/contact', contactRouter.routes(), contactRouter.allowedMethods());
export default api;
