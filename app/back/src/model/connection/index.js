const mongoose = require('mongoose')
const { user, password, host } = require('./model-account')

mongoose.connect(`mongodb+srv://${user}:${password}@${host}/todo`)
const db = mongoose.connection
db.on('error', err => {
  console.error('mongoose 连接错误')
  console.error(err)
})
db.on('open', () => {
  console.log('mongoose 连接成功')
})