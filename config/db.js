const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// localhost config
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// remote config
const connection = mysql.createConnection(process.env.Onlinemysql);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

module.exports = connection;
