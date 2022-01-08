// 合并路由
const combineRouter = require('koa-combine-routers')

const arouter = require('./aRouter')

module.exports = combineRouter(
  arouter
)