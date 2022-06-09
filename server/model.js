const db = require('./db')

module.exports = {
  getProducts: function (callback) {
    db.query('SELECT * FROM product ORDER BY id ASC LIMIT 15')
    .then((result) => callback(result.rows))
    .catch((err) => callback(err))
  },
}