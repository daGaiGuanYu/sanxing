const getDB = require('./model')
const app = require('../app')
const { db } = require('../app')

async function start(){
  app.db = await getDB()
  db.createCollection('test')

  // 在此处 require router，这样 router require db 时，就不再是空了
}