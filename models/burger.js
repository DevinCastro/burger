// bring in the orm
const orm = require('../config/orm.js')

// create a model object that will essentally be a wrapper for the original orm we built
const burger = {}

// CREATE a burger
burger.insertOne = (burger, cb) => {
  orm.insertOne('burgers', burger, id => cb(id))
}


// READ the burgers table
burger.selectAll = (cb) => {
  orm.selectAll('burgers', burgers => cb(burgers))
}

// UPDATE a burger
burger.updateOne = (updates, where, cb) => {
  orm.updateOne('burgers', updates, where, () => cb())
}


// export the burger model
module.exports = burger