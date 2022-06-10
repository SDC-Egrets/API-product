const db = require('./db')

module.exports = {
  getProducts: function (callback) {
    db.query('SELECT * FROM product ORDER BY id ASC LIMIT 10')
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err, null))
  },
  getProductInfo: function(product_id, callback) {
    db.query(`select json_build_object('id', p.id, 'name', p.name, 'slogan', p.slogan, 'description', p.description,
              'category', p.category, 'default_price', p.default_price, 'feature', 
              (select array_to_json(array_agg(json_build_object('feature', f.feature, 'value', f.value)))
              from features as f 
              where f.product_id = ${product_id}))
              from product p
              where p.id = ${product_id};`)
    .then((result) => callback(null, result.rows[0].json_build_object))
    .catch((err) => callback(err, null))
  }
}