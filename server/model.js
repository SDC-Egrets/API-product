const db = require('./db')

module.exports = {
  getProducts: function (callback) {
    db.query('SELECT * FROM product ORDER BY id ASC LIMIT 10')
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err, null))
  },
  getProductInfo: function(product_id, callback) {
    db.query(`select json_build_object('id', p.id, 'name', p.name, 'slogan', p.slogan, 'description', p.description,
              'category', p.category, 'default_price', p.default_price, 'features', 
              (select array_to_json(array_agg(json_build_object('feature', f.feature, 'value', f.value)))
              from features as f 
              where f.product_id = ${product_id}))
              from product p
              where p.id = ${product_id};`)
    .then((result) => callback(null, result.rows[0].json_build_object))
    .catch((err) => callback(err, null))
  },
  getStyles: function(product_id, callback) {
    db.query(`select json_build_object('product_id', ${product_id}, 
        'result', (select array_to_json(array_agg(json_build_object(
          'style_id', s.id, 'name', s.name, 'original_price', s.original_price, 'sale_price', s.sale_price, 'default?', s.default_style,
          'photos', 
          (case
            when (select array_to_json(array_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))) from photos where photos.style_id = s.id) is null then '[{"thumbnail_url": null, "url": null}]'
            else (select array_to_json(array_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))) from photos where photos.style_id = s.id)
          end),
          'skus', 
          (case
            when (select json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size))
            from skus where skus.style_id = s.id) is null then '{}'

            else (select json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size))
            from skus where skus.style_id = s.id)
          end))))))
      from styles s where s.product_id = ${product_id};`)
    .then((result) => callback(null, result.rows[0].json_build_object))
    .catch((err) => callback(err, null))
  },
  getRelated: function(product_id, callback) {
    db.query(`select array_agg(related_product_id) from related where current_product_id = ${product_id};`)
    .then((result) => callback(null, result.rows[0].array_agg))
    .catch((err) => callback(err, null))
  }
}