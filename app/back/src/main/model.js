const MongoClient = require('mongodb').MongoClient
const { user, password, host } = require('./model-account')

module.exports = async function(){
  console.log('连接 mongo')
  const client = new MongoClient(`mongodb+srv://${user}:${password}@${host}`)
  await client.connect()
  console.log('mongo 已连接')

  return client.db('todo')
}