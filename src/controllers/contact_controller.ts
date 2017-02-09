import * as koa from 'koa'
import { getContacts } from '../dal/contact_dal'

const getContact = async (ctx: koa.Context, next) => {
    getContacts();
    ctx.body = {
        id: '1',
        name: 'jackie'
    }
}

export { getContact }