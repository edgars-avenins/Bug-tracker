import request from 'superagent'

export const getUserProfile = (email) => {
    return request
        .get(`/api/v1/users/${email}`)
        .then(res => res.body)
}