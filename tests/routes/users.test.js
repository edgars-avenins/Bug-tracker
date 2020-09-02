const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')

let baseUrl = '/api/v1/users'

jest.mock('../../database/users', () => {
    return {
        getUser: jest.fn()
    }
})

test('/users routes works with a successful db call', () => {
    db.getUser.mockImplementation(email => Promise.resolve({email: 'email'}))

    return request(server)
        .get(`${baseUrl}/testemail@email.com`)
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text).email).toContain('email')
        })
})

test('/users routes works with a failed db call', () => {
    db.getUser.mockImplementation(email => Promise.reject({message: 'Database Error'}))

    return request(server)
        .get(`${baseUrl}/testemail@email.com`)
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Database Error')
        })
})