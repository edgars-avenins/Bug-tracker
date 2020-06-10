const router = require('express').Router()

const db = require('../database/issues')

router.get('/:id', (req, res) => {
    db.getProjectIssues(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => {
            // console.log(err)
            res.status(500).json({message: err.message})
        })
})

router.post('/:id', (req, res) => {
    const data = req.body
    data.project_id = req.params.id
    data.user_id = 50002

    db.addIssue(data)
        .then(data => res.status(200).json(data))
        .catch(err => {
            // console.log(err)
            res.status(500).json({message: err.message})
        })
})

module.exports = router