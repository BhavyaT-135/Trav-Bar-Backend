const router = require('express').Router();
const bcrypt = require('bcrypt')

//GET ALL USERS
router.get('/', (req, res) => {
    res.send("Get all users")
})

//GET A SINGLE USER
router.get('/:id', (req, res) => {
    res.send(`Get user with id: ${req.params.id}`)
})

//CREATE A USER
router.post('/', (req, res) => {
    res.json(req.body)
})

//UPDATE A USER 
router.put('/:id', (req, res) => {
    res.json(req.body)
})

module.exports = router;