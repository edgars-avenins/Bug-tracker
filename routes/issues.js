const express = require('express')
const router = express.Router()

const db = require('../database/issues')

router.get('/:id', (req, res) => {
    db.getProjectIssues(req.params.id)
        .then(data => res.json(data))
})

router.post('/:id', (req, res) => {
    const data = req.body
    data.project_id = req.params.id
    data.user_id = 50002

    db.addIssue(data)
        .then(data => res.json(data))
})

module.exports = router