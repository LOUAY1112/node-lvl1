const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`https://locall.host/3000/#google_vignette:${port}/`)
})