const express = require('express')
const router = express.Router()

const db = require('../database/issues')

router.get('/:id', (req, res) => {
    db.getProjectIssues(req.params.id)
        .then(data => res.json(data))
})

module.exports = router