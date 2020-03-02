
const express = require('express')
const app = express()
const scrape = require('./pupeteer')

app.get('/', function (req, res) {
    scrape("plombier")
  res.send('Hello World!')
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})

