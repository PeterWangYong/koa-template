module.exports = {
  dbs: 'mongodb://192.168.2.130:27017/teacher',
  redis: {
    get host() {
      return '192.168.2.130'
    },
    get port() {
      return 6379
    }
  }
}
