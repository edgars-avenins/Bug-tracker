const express = require('express')
const router = express.Router()

const db = require('../database/details')

router.get('/:id', (req, res) => {
    db.getIssueDetails(req.params.id)
        .then(data => res.json(data))
})

module.exports = router