const router = require('express').Router()
const burger = require('../models/burger.js')



// CREATE a burger
router.post('/burgers', (req, res) => {
  burger.insertOne(req.body, id => {
    res.json({ id })
  })
})



// Get all burgers
router.get('/burgers', (req, res) => {
  burger.selectAll(burgers => {
    res.json(burgers)
  })
})


// Update one burger
router.put('/burgers/:id', (req, res) => {
  burger.updateOne(req.body, { id: req.params.id }, () => {
    res.sendStatus(200)
  })
})


module.exports = router
