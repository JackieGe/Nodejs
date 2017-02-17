'use strict';
const env = process.env.NODE_ENV
const port = process.env.PORT || 4000
const src = env === 'production'? './build/app' : './src/app'
console.log(`env = ${env}, port = ${port}`);
const app = require(src).default;
app.listen(port);