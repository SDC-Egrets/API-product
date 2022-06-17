const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-18b2d65cf1664603eaf00b217d57e951.txt', (req, res) => 
  res.status(200).send('loaderio-18b2d65cf1664603eaf00b217d57e951'));

module.exports = router