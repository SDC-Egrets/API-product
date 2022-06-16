const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-53717b1d5c16264945feeab87d0127b2.txt', (req, res) => 
  res.status(200).send('loaderio-53717b1d5c16264945feeab87d0127b2'));

module.exports = router