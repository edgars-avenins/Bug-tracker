const router = require('express').Router()

const db = require('../database/users')

router.get('/:email', (req, res) => {
    db.getUser(req.params.email)
        .then(data => res.json(data))
})

module.exports = router