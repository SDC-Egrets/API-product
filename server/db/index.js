const { Pool } = require('pg')

const credentials = {
  user: "postgres",
  host: "54.164.43.7",
  database: "SDC",
  password: "1",
  port: 5432,
};

const pool = new Pool(credentials)

pool.query('SELECT NOW()')
.then((result) => {
  console.log('Connecting to Database ... ');
  console.log('Connected at: ', result.rows[0].now)
})
.catch((err) => {
  console.log('Error : ', err)
})

module.exports = pool




