const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')
const auth = require('../../server/auth/token')
const hash = require('../../server/auth/hash')

let baseUrl = '/api/auth'

jest.mock('../../database/users', () => {
    return {
        createUser: jest.fn(),
        userExists: jest.fn(),
        getUserByUsername: jest.fn()
    }
})

jest.mock('../../server/auth/hash', () => {
    return {
        generatePasswordHash: jest.fn(),
        comparePasswordToHash: jest.fn()
    }
})
// jest.mock('../../database/users', () => {
//     return {
//         createUser: (email, firstName, lastName, hash) => Promise.resolve([{ id: 1 }]),
//         userExists: (email) => Promise.resolve(false),
//     }
// })
// jest.mock('../../server/auth/token', () => {
//     return {
//         issue: (req,res) => {
//             res.json({
//                 message: 'Authentication successful',
//                 token: '123'
//               })
//         }
//     }
// })

test('/api/auth routes', () => {
    expect(55).toBeTruthy()
})

test('/register route works and returns 400 if the user name already exists', () => {
    db.userExists.mockImplementation(email => Promise.resolve(true))
    
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

test('/register route works and returns 500 if the userExists function fails', () => {
    db.userExists.mockImplementation(email => Promise.reject())

    return request(server)
        .post(`${baseUrl}/register`)
        .send({
            email: 'edgars123@gmail.com',
            firstName: 'Edgars',
            lastName: 'Avenins',
            hash: 'coolcool'
        })
        .expect(500)
        .then((res) => {
            expect(res.body.message).toContain('Error')
        })
})

test('/register route works and returns 500 if the createUser function fails', () => {
    db.userExists.mockImplementation(email => Promise.resolve(false))
    db.createUser.mockImplementation((email, firstName, lastName, hash) => Promise.reject())
    hash.generatePasswordHash.mockImplementation((password) => Promise.reject())

    return request(server)
        .post(`${baseUrl}/register`)
        .send({
            email: 'edgars123@gmail.com',
            firstName: 'Edgars',
            lastName: 'Avenins',
            hash: 'coolcool'
        })
        .expect(500)
        .then((res) => {
            expect(res.body.message).toContain('Error')
        })
})

test('/login route works and returns 500 if the getUserByUsername fails', () => {
    db.getUserByUsername.mockImplementation(email => Promise.reject())

    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com'
        })
        .expect(500)
        .then(res => {
            expect(res.body.message).toContain('Error')
        })
})

test('/login route works and returns 403 if the getUserByUsername returns 0', () => {
    db.getUserByUsername.mockImplementation(email => Promise.resolve(0))

    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com'
        })
        .expect(403)
        .then(res => {
            expect(res.body.message).toContain('User does not exist')
        })
})

test('/login route works and returns 500 if the comparePasswordtoHash fails', () => {
    db.getUserByUsername.mockImplementation(email => Promise.resolve(true))
    hash.comparePasswordToHash.mockImplementation((hash, password) => Promise.reject({message: 'Server Error'}))

    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com',
            hash: '12345678'
        })
        .expect(500)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Server Error')
        })
})

test('/login route works and returns 400 if the comparePasswordtoHash returns false', () => {
    db.getUserByUsername.mockImplementation(email => Promise.resolve(true))
    hash.comparePasswordToHash.mockImplementation((hash, password) => Promise.resolve(false))

    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com',
            hash: '12345678'
        })
        .expect(400)
        .then(res => {
            expect(JSON.parse(res.text).message).toContain('Password is incorrect')
        })
})