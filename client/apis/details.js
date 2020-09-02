import request from 'superagent'

const url = '/api/v1/details'

export function getIssueDetails(id){
    return request
        .get(url + `/${id}`)
        .then(res => res.body)
}