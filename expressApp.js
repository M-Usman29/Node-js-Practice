const express = require('express')
const app = express()
const port = 3000
const fs =require('fs');

app.get('/', (req, res) => {
    const data= fs.readFileSync("index.html");
    res.end(data.toString())
})

app.listen(port, () => {
  console.log(` App listening on port ${port}`)
})