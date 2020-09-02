import request from 'superagent'

const url = '/api/v1/projects'

export function getAllProjects(){
    return request
        .get(url)
        .then(res => res.body)
}

export function addProject(data){
    return request
        .post(url)
        .send(data)
        .then(res => res.body)
}