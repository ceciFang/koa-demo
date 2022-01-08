const Router = require('koa-router')
const a = require('../api/a')
const router = new Router()

// 设置路由
router.get('/a', a)

module.exports= router
