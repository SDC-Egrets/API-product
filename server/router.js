const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-b7d33ba30d4735fc0c46c7658de2a753.txt', (req, res) => 
  res.status(200).send('loaderio-b7d33ba30d4735fc0c46c7658de2a753'));

module.exports = router