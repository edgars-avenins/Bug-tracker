const connection = require('./connection')

module.exports = {
    getProjectIssues,
    addIssue
}

function addIssue(data, db = connection){
    return db('issues')
        .insert(data)
        .then(id => id)
}

function getProjectIssues(projectID, db = connection){
    return db('issues')
        .where('project_id', projectID)
        .select()
        .then(data => data)
}