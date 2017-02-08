"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Koa = require("koa");
const koa_bodyparser_1 = require("koa-bodyparser");
const cors = require("kcors");
const app = new Koa()
    .use(cors())
    .use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = "hello koa";
    //yield next();
}))
    .use(koa_bodyparser_1.default());
Object.defineProperty(exports, "__esModule", { value: true });
//.use(api.routes())
// .use(api.allowedMethods());
exports.default = app;
