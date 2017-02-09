import * as KoaRouter from 'koa-router'
import { getContact } from '../controllers/contact_controller'

const contactRouter = new KoaRouter();
contactRouter.get('/:id', getContact);
contactRouter.get('/', getContact);

export default contactRouter;