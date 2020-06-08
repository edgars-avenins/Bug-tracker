const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')

jest.mock('../../database/users', () => {
    return {
        createUser: (email, firstName, lastName, hash) => Promise.resolve([{ id: 15 }]),
        userExists: (email) => Promise.resolve(false),
    }
})
jest.mock('../../server/auth/token', () => {
    return {
        issue: (req,res) => {
            res.json({
                message: 'Authentication successful',
                token: '123'
              })
        }
    }
})
let baseUrl = '/api/auth'

beforeEach(() => {
    // db.reset()
  })
  

test('/api/auth routes', () => {
    expect(55).toBeTruthy()
})

test('/register route works', () => {
    return request(server)
        .post(`${baseUrl}/register`)
        .send({
            email: 'edgars123@gmail.com',
            firstName: 'Edgars',
            lastName: 'Avenins',
            hash: 'coolcool'
        })
        .expect(200)
        .then((res) => {
            expect(res.body.message).toContain('Auth')
        })
})

test('/login route works', () => {
    return request(server)
        .post(`${baseUrl}/login`)
        .send({
            email: 'edgars123@gmail.com',
            hash: 'coolcool'
        })
        .expect(200)
        .then(res => {
            expect(res.body.message).toContain('Auth')
        })
})