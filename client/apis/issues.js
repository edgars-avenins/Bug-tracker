import request from 'superagent'

const url = '/api/v1/issues'

export function getProjectIssues(id){
    return request
        .get(url + `/${id}`)
        .then(res => res.body)
}

export function addIssue(data, id){
    console.log(id)
    return request
        .post(url + `/${id}`)
        .send(data)
        .then(res => res.body)
}

