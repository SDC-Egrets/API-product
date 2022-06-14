const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-7190a7dbb03ad1b0b862f7fb22d1ca8d.txt', (req, res) => 
  res.status(200).send('../loaderio-7190a7dbb03ad1b0b862f7fb22d1ca8d.txt'));

module.exports = router