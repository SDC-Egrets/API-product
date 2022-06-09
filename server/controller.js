const model = require('./model.js')

module.exports = {
  getProducts: function (req, res) {
    model.getProducts((err, result) => {
      if (err) { res.json(err) }
      else { res.status(200).json(result)}
    })
  },
}