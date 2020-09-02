const router = require('express').Router()

const db = require('../database/users')

router.get('/:email', (req, res) => {
    db.getUser(req.params.email)
        .then(data => res.status(200).json(data))
        .catch(err => {
            // console.log(err)
            res.status(500).json({message: err.message})
        })
})

module.exports = router