const router = require('express').Router()

const db = require('../database/projects')

router.get('/', (req, res) => {
    db.getAllProjects()
        .then(data => res.status(200).json(data))
        .catch(err => {
            // console.log(err)
            res.status(500).json({ message: err.message })
        })
})

router.post('/', (req, res) => {
    const data = req.body
    data.user_id = 50001

    db.addProject(data)
        .then(id => res.status(200).json(id))
        .catch(err => {
            // console.log(err)
            res.status(500).json({ message: err.message })
        })
})

module.exports = router