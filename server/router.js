const controller = require('./controller.js')
const router = require('express').Router()

// Connect controller methods to corresponding routes
router.get('/products', controller.getProducts)
router.get('/products/:product_id', controller.getProductInfo)

module.exports = router