const connection = require('./connection')

module.exports = {
    getProjectIssues,
}

function getProjectIssues(projectID, db = connection){
    return db('issues')
        .where('project_id', projectID)
        .select()
        .then(data => data)
}