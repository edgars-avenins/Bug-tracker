const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')
const auth = require('../../server/auth/token')

let baseUrl = '/api/auth'

jest.mock('../../database/users', () => {
    return {
        createUser: jest.fn(),
        userExists: jest.fn()
    }
})
jest.mock('../../server/auth/token', () => {
    return {
        issue: jest.fn()
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
    db.userExists.mockImplementation(email => Promise.resolve())

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
