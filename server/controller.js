const model = require('./model.js')

module.exports = {
  getProducts: function (req, res) {
    model.getProducts((err, result) => {
      if (err) { res.status(404).json(err) }
      else { res.status(200).json(result) }
    })
  },
  getProductInfo: function (req, res) {
    model.getProductInfo(req.params.product_id, (err, result) => {
      if (err) { res.status(404).json(err)}
      else { res.status(200).json(result) }
    })
  },
}