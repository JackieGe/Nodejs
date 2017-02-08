"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const KoaRouter = require("koa-router");
const api = new KoaRouter();
const validateCollection = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { collection } = ctx.params;
    if (!(collection in ctx.state.collections)) {
        return ctx.throw(404);
    }
    yield next();
});
const validateKey = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { authorization } = ctx.request.headers;
    if (authorization !== ctx.state.authorizationHeader) {
        return ctx.throw(401);
    }
    yield next();
});
api.get('/:collection/:attribute/:value/count', validateKey, validateCollection, (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { collection, attribute, value } = ctx.params;
    const count = yield ctx
        .state
        .collections[collection]
        .countBy(attribute, value);
    ctx.body = {
        count: count,
    };
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = api;
