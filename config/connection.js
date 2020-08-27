// first bring in the mysql2 package
const mysql = require('mysql2')

// export the connectiong to the database
module.exports = mysql.createConnection('mysql://root:rootroot@localhost/burgers_db')