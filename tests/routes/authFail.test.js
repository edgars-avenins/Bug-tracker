const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')

jest.mock('../../database/users', () => {
    return {
        createUser: (email, firstName, lastName, hash) => Promise.resolve([{ id: 15 }]),
        userExists: (email) => Promise.resolve(true),
        getUserByUsername: (email) => Promise.resolve(0)
    }
})

let baseUrl = '/api/auth'

beforeEach(() => {
    // db.reset()
  })
  

test('/api/auth routes', () => {
    expect(55).toBeTruthy()
})

test('/register user name taken', () => {
    return request(server)
        .post(`${baseUrl}/register`)
        .send({
            email: 'edgars123@gmail.com',
            firstName: 'Edgars',
            lastName: 'Avenins',
            hash: 'coolcool'
        })
        .expect(400)
        .then((res) => {
            expect(res.body.message).toContain('Taken')
        })
})

//learn to mock in this tests scope instead file scope
test('/register createUser fails', () => {
    return request(server)
        .post(`${baseUrl}/register`)
        .send({
            email: 'edgars123@gmail.com',
            firstName: 'Edgars',
            lastName: 'Avenins',
            hash: 'coolcool'
        })
        .expect(400)
        .then((res) => {
            expect(res.body.message).toContain('Taken')
        })
})

test('/login route works', () => {
    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com',
            hash: 'coolcool'
        })
        .expect(403)
        .then(res => {
            expect(res.body.message).toContain('not exist')
        })
})