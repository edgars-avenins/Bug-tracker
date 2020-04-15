const connection = require('./connection')

module.exports = {
    getIssueDetails,
}

function getIssueDetails(issueID, db = connection) {
    return db('issues')
        .join('details', 'details.issue_id', 'issues.id')
        .join('projects', 'projects.id', 'issues.project_id')
        .join('users', 'users.id', 'issues.user_id')
        .join('status', 'status.issue_id', 'issues.id')
        .select('details.id AS detailId',
            'issues.id AS issueId',
            'projects.id AS projectId',
            'projects.user_id AS projectUserId',
            'users.id AS issueStartedUserId',
            'status.user_id AS issueAssignedUserId',
            'issues.name AS issueName',
            'issues.description AS issueDescription',
            'projects.name AS projectName',
            'projects.description AS projectDescription',
            'users.first_name AS firstName',
            'users.last_name AS lastName',
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

console.log(data);

            return data
        })
        .catch(err => console.error('Failed at DB getIssueDetails: ', err))
}

function getIssueUser(){
    
}