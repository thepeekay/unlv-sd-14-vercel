const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello, world from an update!')
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

module.exports = app
