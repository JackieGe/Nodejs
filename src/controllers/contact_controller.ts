import * as koa from 'koa'

const getContact = async (ctx: koa.Context, next) => {
    ctx.body = {
        id: '1',
        name: 'jackie'
    }
}

export { getContact }