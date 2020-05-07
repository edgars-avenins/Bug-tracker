const connection = require('./connection')
const {generatePasswordHash} = require('../server/auth/hash')

module.exports = {
    getUser,
    createUser,
    userExists,
    getUserByUsername
}

function getUser(email, db = connection){
    return db('users')
        .where('email', email).first()
        .select('users.first_name AS firstName','users.last_name AS lastName', '*')
        .then(data => {
          delete data.hash
          return data
        })
}

function createUser ( email, first_name, last_name, password, db = connection) {
  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({ email, first_name, last_name, hash})
    })
}

function userExists (email, db = connection) {
  return db('users')
    .where('email', email)
    .then(users => users.length > 0)
}

function getUserByUsername (email, db = connection) {
  return db('users')
    .where('email', email)
    .first()
}
