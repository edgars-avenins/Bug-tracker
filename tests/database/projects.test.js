const testDb = require('./connection')
const projects = require('../../database/projects')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
    return testDb.destroy()
})

test('Database Projects getAllProjects returns all projects', () => {
    return projects.getAllProjects(testDb)
        .then(data => expect(data.length).toEqual(5))
})

test('Database Projects addProject adds a new project and returns the new ID', () => {
    return projects.addProject({user_id: 50001, name: 'TEST tracker', description: 'TEST'}, testDb)
        .then(data => expect(data).toEqual([10006]))
})