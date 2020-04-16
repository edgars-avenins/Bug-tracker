const express = require('express')
const router = express.Router()

const db = require('../database/projects')

router.get('/', (req, res) => {
    db.getAllProjects()
        .then(data => res.json(data))
})

router.post('/', (req, res) => {
    const data = req.body
    data.user_id = 50001
    
    db.addProject(data)
        .then(id => res.json(id))
})

module.exports = router