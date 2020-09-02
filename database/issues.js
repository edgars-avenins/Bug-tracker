const connection = require('./connection')

module.exports = {
    getProjectIssues,
    addIssue
}

function addIssue(data, db = connection){
    return db('issues')
        .insert(data)
        .then(id => {
            return db('status')
                .insert({issue_id: id[0], assigned: false, user_id: 0})
                .then(() => {
                    return db('details')
                        .insert({issue_id: id[0], priority: 'Low'})
                })
        })
}

function getProjectIssues(projectID, db = connection){
    return db('issues')
        .where('project_id', projectID)
        .select()
        .then(data => data)
}