const testDb = require('./connection')
const users = require('../../database/users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
    return testDb.destroy()
})

test('Users table userExists returns true when provided with existing entry', () => {
    return users.userExists('edgars.avenins@gmail.com', testDb)
        .then(res => expect(res).toBeTruthy())
})

test('Users table userExists returns false when provided with non-existing entry', () => {
    return users.userExists('edgars@gmail.com', testDb)
        .then(res => expect(res).toBeFalsy())
})

test('Users table getUser returns an object with 4 properties when provided with existing entry', () => {
    return users.getUser('edgars.avenins@gmail.com', testDb)
        .then(res => expect(Object.keys(res).length).toEqual(4))
})

test('Users table getUser returns undefined when provided with non-existing entry', () => {
    return users.getUser('edgars@gmail.com', testDb)
        .then(res => expect(res.message).toContain('User does not exist'))
})

test('Users table createUser returns the new ID when provided with enough user data', () => {
    return users.createUser('test@test.com', 'test','testy', 'coolpsw', testDb)
        .then(res => expect(res).toEqual([50004]))
})

test('Users table getUserByUsername returns the new ID when provided with enough user data', () => {
    return users.getUserByUsername('edgars.avenins@gmail.com', testDb)
        .then(res => expect(Object.keys(res).length).toEqual(4))
})

