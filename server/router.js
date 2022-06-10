const controller = require('./controller.js')
const router = require('express').Router()

// Connect controller methods to corresponding routes
router.get('/products', controller.getProducts)
router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)

module.exports = router