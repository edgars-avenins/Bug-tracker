const router = require('express').Router()

const db = require('../database/details')

router.get('/:id', (req, res) => {
    db.getIssueDetails(req.params.id)
        .then(details => {

            db.getAssignedUser(details.issueAssignedUserId)
                .then(assignedUser => {

                    db.getProjectUser(details.projectUserId)
                        .then(projectUser => {

                            db.getIssueUser(details.issueStartedUserId)
                                .then(issueUser => {
                                    const data = {
                                        details,
                                        assignedUser,
                                        projectUser,
                                        issueUser
                                    }

                                    res.status(200).json(data)
                                })
                                .catch(err => {
                                    // console.log(err)
                                    res.status(500).json({ message: err.message })
                                })
                        })
                        .catch(err => {
                            // console.log(err)
                            res.status(500).json({ message: err.message })
                        })
                })
                .catch(err => {
                    // console.log(err)
                    res.status(500).json({ message: err.message })
                })
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json({ message: err.message })
        })
})

module.exports = router