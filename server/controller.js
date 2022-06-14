const model = require('./model.js')

module.exports = {
  getProductInfo: function (req, res) {
    model.getProductInfo(req, res)
  },
  getStyles: function (req, res) { 
    model.getStyles(req, res) 
  },
  getRelated: function (req, res) {
    model.getRelated(req, res)
  }
}