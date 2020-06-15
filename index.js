require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const getData = require('./src/apis/youtube')
const logTraffic = require('./src/apis/logTraffic')
const app = express()
const port = process.env.PORT

 
app.set('trust proxy', 1)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.options('*', cors())
 
app.get('/', cors(), (req, res, next) => {
  res.send("home")
})

app.post('/log', cors(corsOptions), (req, res) => {
  logTraffic(req.body)
})

app.get('/search/:q', cors(), (req, res, next) => {
  getData(req.params, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})