require('dotenv').config()
const express = require('express')
const cors = require('cors')
const getData = require('./src/apis/youtube')
const app = express()
const port = process.env.PORT;
const rateLimit = require("express-rate-limit");
 
app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 80
});
 
app.use(limiter);

app.get('/search/:q', cors(), async (req, res, next) => {
  const response = await getData(req.params)
  res.send(JSON.stringify(response.data))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))