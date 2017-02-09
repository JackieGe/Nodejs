import * as koa from 'koa'
import { getContacts } from '../dal/contact_dal'

const getContact = async (ctx: koa.Context, next) => {
    let contactId = (<any>ctx).params.id;
    let contacts = await getContacts(contactId);
    for (let row of contacts) {
        console.log(`${row["Name"]}`)
    }
    ctx.body = JSON.stringify(contacts);
    /*ctx.body = {
        id: '1',
        name: 'jackie'
    }*/
}

export { getContact }