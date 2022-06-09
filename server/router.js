const controller = require('./controller.js')
const router = require('express').Router()

// Connect controller methods to corresponding routes
router.get('/', controller.getProducts)

module.exports = router