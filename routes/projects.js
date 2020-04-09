const express = require('express')
const router = express.Router()

const db = require('../database/projects')

router.get('/', (req, res) => {
    db.getAllProjects()
        .then(data => res.json(data))
})

module.exports = router