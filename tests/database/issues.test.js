const testDb = require('./connection')
const issues = require('../../database/issues')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
    return testDb.destroy()
})

test('Database Issues getProjectIssues returns issues of particular project', () => {
    return issues.getProjectIssues(10001, testDb)
        .then(data => expect(data.length).toEqual(5))
})