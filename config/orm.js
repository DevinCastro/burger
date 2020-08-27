// bring in our database connection
const db = require('./connection.js')

// create an orm object that will hold all of our custom orm functions
const orm = {}

// Create a burger
orm.insertOne = (table, data, cb) => {
  // query the db to insert the data parameter into the table parameter
  db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
    if (err) { console.log(err) }
    // insert id onto the fields and pass this value into the callback function
    cb(fields.insertId)
  })
}

// Read all burgers
orm.selectAll = (table, cb) => {
  // query the database to select everything from the table parameter
  db.query(`SELECT * FROM ${table}`, (err, data) => {
    if (err) {
      console.log(err)
    }
    // pass the data from the db.query through the callback function
    cb(data)
  })
}
// UPDATE Burgers
orm.updateOne = (table, updates, where, cb) => {
  // this update query will pass the updates to the table WHERE the user specifies
  db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
    if (err) { console.log(err) }
    cb()
  })
}

// Delete a burger