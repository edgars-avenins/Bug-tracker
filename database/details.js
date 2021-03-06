const connection = require('./connection')

module.exports = {
    getIssueDetails,
    getProjectUser,
    getAssignedUser,
    getIssueUser
}

function getIssueDetails(issueID, db = connection) {
    return db('issues')
        .join('details', 'details.issue_id', 'issues.id')
        .join('projects', 'projects.id', 'issues.project_id')
        .leftJoin('status', 'status.issue_id', 'issues.id')
        .select('details.id AS detailId',
            'issues.id AS issueId',
            'projects.id AS projectId',
            'projects.user_id AS projectUserId',
            'status.user_id AS issueAssignedUserId',
            'issues.user_id AS issueStartedUserId',
            'issues.name AS issueName',
            'issues.description AS issueDescription',
            'projects.name AS projectName',
            'projects.description AS projectDescription',
            '*')
        .where('issueId', issueID).first()
        .then(data => {
            delete data.id
            delete data.user_id
            delete data.project_id
            delete data.issue_id
            delete data.name
            delete data.description
            delete data.hash
            delete data.first_name
            delete data.last_name

            return data
        })
        .catch(err => console.log('Failed at DB getIssueDetails: ', err))
}



function getIssueUser(userId, db = connection){
    return db('users')
        .where('id', userId)
        .select('users.first_name AS issueFirstName',
                'users.last_name AS issueLastName',
                'users.email AS issueEmail')
        .first()
        .then(data => data)
}

function getProjectUser(userId, db = connection){
    return db('users')
        .where('id', userId)
        .select('users.first_name AS projectFirstName',
                'users.last_name AS projectLastName',
                'users.email AS projectEmail')
        .first()
        .then(data => data)
}

function getAssignedUser(userId, db = connection){
    return db('users')
        .where('id', userId)
        .select('users.first_name AS assignedFirstName',
                'users.last_name AS assignedLastName',
                'users.email AS assignedEmail')
        .first()
        .then(data => data)
}