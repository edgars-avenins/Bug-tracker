const testDb = require('./connection')
const details = require('../../database/details')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
    return testDb.destroy()
})

test('Database Details getAssignedUser returns user when provided with a valid ID', () =>{
    return details.getAssignedUser(50001, testDb)
        .then(data => expect(Object.keys(data).length).toEqual(3))
})

test('Database Details getProjectUser returns user when provided with a valid ID', () =>{
    return details.getProjectUser(50001, testDb)
        .then(data => expect(Object.keys(data).length).toEqual(3))
})

test('Database Details getIssueUser returns user when provided with a valid ID', () =>{
    return details.getIssueUser(50001, testDb)
        .then(data => expect(Object.keys(data).length).toEqual(3))
})

test('Database Details getIssueDetails returns user when provided with a valid ID', () =>{
    return details.getIssueDetails(100002, testDb)
        .then(data => expect(Object.keys(data).length).toEqual(12))
})