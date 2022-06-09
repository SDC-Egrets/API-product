const { Pool } = require('pg');

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "SDC",
  password: "1",
  port: 5432,
};

const pool = new Pool(credentials);

pool.query('SELECT * FROM product ORDER BY id ASC LIMIT 10', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('the result is', res);
  }
});

