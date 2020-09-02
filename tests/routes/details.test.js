const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/details')

let baseUrl = '/api/v1/details'

jest.mock('../../database/details', () => {
    return {
        getIssueDetails: jest.fn(),
        getProjectUser: jest.fn(),
        getIssueUser: jest.fn(),
        getAssignedUser: jest.fn()
    }
})

test('/details get routes works and returns 200 on successful 4 consequent db calls', () => {
    db.getIssueDetails.mockImplementation(() => Promise.resolve(true))
    db.getAssignedUser.mockImplementation(() => Promise.resolve(true))
    db.getProjectUser.mockImplementation(() => Promise.resolve(true))
    db.getIssueUser.mockImplementation(() => Promise.resolve(true))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(200)
        .then(res => {
            expect(Object.keys(JSON.parse(res.text)).length).toEqual(4)
        })
})

test('/details get routes works and returns 500 on unsuccessful 4th consequent db call', () => {
    db.getIssueDetails.mockImplementation(() => Promise.resolve(true))
    db.getAssignedUser.mockImplementation(() => Promise.resolve(true))
    db.getProjectUser.mockImplementation(() => Promise.resolve(true))
    db.getIssueUser.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})

test('/details get routes works and returns 500 on unsuccessful 3rd consequent db call', () => {
    db.getIssueDetails.mockImplementation(() => Promise.resolve(true))
    db.getAssignedUser.mockImplementation(() => Promise.resolve(true))
    db.getProjectUser.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})

test('/details get routes works and returns 500 on unsuccessful 2nd consequent db call', () => {
    db.getIssueDetails.mockImplementation(() => Promise.resolve(true))
    db.getAssignedUser.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})

test('/details get routes works and returns 500 on unsuccessful 1st db call', () => {
    db.getIssueDetails.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})