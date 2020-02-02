const router = require('koa-router')()
const redis = require('../utils/redis')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/redis', async (ctx, next) => {
  const res = await redis.set('hello', 'world')
  ctx.body = res
})

module.exports = router
