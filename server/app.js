const express = require('express')
const router = require('./router.js')

// Middleware
const cors = require('cors')

const app = express()
module.exports = app

// Set listen port
app.set('port', 3000)

// Logging and parsing
app.use(cors())
app.use(express.json())

// set up router
app.use('/', router)

app.listen(app.get('port'), () => {
  console.log('Listening on localhost:', app.get('port'))
})









