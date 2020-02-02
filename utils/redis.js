const Redis = require('koa-redis')
const dbConfig = require('../dbs/config')

const client = new Redis({
  host: dbConfig.redis.host,
  port: dbConfig.redis.port
}).client

module.exports = client
