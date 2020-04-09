const connection = require('./connection')

module.exports = {
    getAllProjects,
}

function getAllProjects(db = connection){
    return db('projects')
        .select()
        .then(data => data)
}