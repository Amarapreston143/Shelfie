require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then(db => {
      app.set('db', db)
      console.log('db connnection: SUCCESSFUL')
  }).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Get some on port ${SERVER_PORT}`))