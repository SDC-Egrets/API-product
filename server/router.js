const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-f7dc770c2957e8a64c6f20cfe6759bde.txt', (req, res) => 
  res.status(200).send('loaderio-f7dc770c2957e8a64c6f20cfe6759bde'));

module.exports = router