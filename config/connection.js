// first bring in the mysql2 package
const mysql = require('mysql2')

// export the connectiong to the database
module.exports = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/burgers_db')