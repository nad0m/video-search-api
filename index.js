require('dotenv').config()
const express = require('express')
const cors = require('cors')
const getData = require('./src/apis/youtube')
const app = express()
const port = process.env.PORT

 
app.set('trust proxy', 1)
 
app.get('/', cors(), (req, res, next) => {
  res.send('Success!')
})

app.get('/search/:q', cors(), (req, res, next) => {
  getData(req.params, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})