const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/projects')

let baseUrl = '/api/v1/projects'

jest.mock('../../database/projects', () => {
    return {
        getAllProjects: jest.fn(),
        addProject: jest.fn()
    }
})

test('/projects get routes works and returns 200 on successful db call', () => {
    db.getAllProjects.mockImplementation(() => Promise.resolve({message: 'works'}))

    return request(server)
        .get(baseUrl)
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('works')
        })
})

test('/projects get routes works and returns 500 on unsuccessful db call', () => {
    db.getAllProjects.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(baseUrl)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})

test('/projects post routes works and returns 200 on successful db call', () => {
    db.addProject.mockImplementation(() => Promise.resolve({message: 'works'}))

    return request(server)
        .post(baseUrl)
        .send({})
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('works')
        })
})

test('/projects post routes works and returns 500 on unsuccessful db call', () => {
    db.addProject.mockImplementation(() => Promise.reject({message: 'Database Error'}))

    return request(server)
        .post(baseUrl)
        .send({})
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})