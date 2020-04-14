const connection = require('./connection')

module.exports = {
    getIssueDetails,
}

function getIssueDetails(issueID, db = connection){
    return db('issues')
        .join('details', 'details.issue_id', 'issues.id')
        .join('projects', 'projects.id', 'issues.project_id')
        .select('details.id AS detail_id', 
            'issues.name AS issueName', 
            'issues.description AS issueDescription', 
            'projects.name AS projectName',
            'projects.description AS projectDescription',
            '*')
        .where('issue_id', issueID).first()
        .then(data => {
            delete data.id
            delete data.name
            delete data.description

            return data
        })
}
//details component should display a join between details/issues/project/users