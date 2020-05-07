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

                                res.json(data)
                            })
                    })
                })
        })
})

module.exports = router