import * as KoaRouter from 'koa-router'

const api = new KoaRouter();

const validateCollection = async (ctx, next) => {
    const { collection } = ctx.params;
    if (!(collection in ctx.state.collections)) {
        return ctx.throw(404);
    }
    await next();
}

const validateKey = async (ctx, next) => {
    const { authorization } = ctx.request.headers;
    if (authorization !== ctx.state.authorizationHeader) {
        return ctx.throw(401);
    }
    await next();
}

api.get('/:collection/:attribute/:value/count',
    validateKey,
    validateCollection,
    async (ctx, next) => {
        const {
            collection,
            attribute,
            value
        } = ctx.params;

        const count = await ctx
            .state
            .collections[collection]
            .countBy(attribute, value);

        ctx.body = {
            count: count,
        };
    });

export default api;