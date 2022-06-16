const controller = require('./controller.js')
const router = require('express').Router()

router.get('/products/:product_id', controller.getProductInfo)
router.get('/products/:product_id/styles', controller.getStyles)
router.get('/products/:product_id/related', controller.getRelated)
router.get('/loaderio-46d014e68b41f604d0800fecf3f0902d.txt', (req, res) => 
  res.status(200).send('loaderio-46d014e68b41f604d0800fecf3f0902d'));

module.exports = router