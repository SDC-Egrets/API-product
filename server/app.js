const express = require('express')
const router = require('./router.js')

const cors = require('cors')

const app = express()
module.exports = app

app.set('port', 3000)

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(app.get('port'))