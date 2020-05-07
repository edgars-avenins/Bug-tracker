const connection = require('./connection')

module.exports = {
    getAllProjects,
    addProject
}

function addProject(projectData, db = connection){
    return db('projects')
        .insert(projectData)
        .then(id => id)
}

function getAllProjects(db = connection){
    return db('projects')
        .select()
        .then(data => data)
}