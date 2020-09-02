const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/issues')

let baseUrl = '/api/v1/issues'

jest.mock('../../database/issues', () => {
    return {
        getProjectIssues: jest.fn(),
        addIssue: jest.fn()
    }
})

test('/issues get routes works and returns 200 on successful db call', () => {
    db.getProjectIssues.mockImplementation(() => Promise.resolve({message: 'works'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('works')
        })
})

test('/issues get routes works and returns 500 on unsuccessful db call', () => {
    db.getProjectIssues.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/10001`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})

test('/projects post routes works and returns 200 on successful db call', () => {
    db.addIssue.mockImplementation(() => Promise.resolve({message: 'works'}))

    return request(server)
        .post(`${baseUrl}/10001`)
        .send({})
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('works')
        })
})

test('/projects post routes works and returns 500 on unsuccessful db call', () => {
    db.addIssue.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .post(`${baseUrl}/10001`)
        .send({})
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})