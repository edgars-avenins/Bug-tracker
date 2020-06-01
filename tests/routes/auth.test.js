require('@babel/polyfill')
const request = require('supertest')

const server = require('../../server/server')
const db = require('../../database/users')


jest.mock('../../database/users')
let baseUrl = '/api/auth'

beforeEach(() => {
    db.reset()
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
})