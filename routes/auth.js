const router = require('express').Router()

const { userExists, createUser } = require('../database/users')
const token = require('../server/auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const { email, firstName, lastName, hash } = req.body
  
  userExists(email)
    .then(exists => {
      
      if (exists) return res.status(400).send({ message: "User Name Taken" })

      createUser( email, firstName, lastName, hash)
        .then(() => next())
        .catch(err => { 
          console.log(err)
          res.status(500).send({message: "Server Error"})
        })
    })
    .catch(err => { 
      console.log(err)
      res.status(500).send({message: "Server Error"})
    })
}

router.post('/login', token.issue)

module.exports = router