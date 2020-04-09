import request from 'superagent'

const url = '/api/v1/issues'

export function getProjectIssues(id){
    return request
        .get(url + `/${id}`)
        .then(res => res.body)
}