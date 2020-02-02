const router = require('koa-router')()
const User = require('../dbs/models/user')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const newUser = await User.create({ username, password })
  if (newUser) {
    ctx.body = 'register success'
  }
})

module.exports = router
