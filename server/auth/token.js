const jwt = require('jsonwebtoken')
const {getUserByUsername} = require('../../database/users')
const verifyJwt = require('express-jwt')
const {comparePasswordToHash} = require('./hash')

function issue (req, res) {

  getUserByUsername(req.body.email)
    .then(user => {
      if (!user) {
        res.status(403).json({message: 'User does not exist'})
      } else {
        comparePasswordToHash(req.body.hash, user.hash)
        .then((match) => {
          if (!match) {
            res.status(400).json({message: 'Password is incorrect'})
          } else {
            const token = createToken(user, process.env.JWT_SECRET)
            res.json({
              message: 'Authentication successful',
              token
            })
          }
        })
        .catch(err => {
          // console.log(err)
          res.status(500).json({message: err.message})
        })
      }
    })
    .catch(err => { 
      // console.log(err)
      res.status(500).send({message: "Server Error"})
    })
}

function createToken (user, secret) {
  const payload = {
    user_id: user.user_id,
    email: user.email
  }

  const options = {
    expiresIn: '24h'
  }

  return jwt.sign(payload, secret, options)
}

function decode (req, res, next) {
  verifyJwt({ secret: process.env.JWT_SECRET, credentialsRequired: true })(req, res, next)
}

module.exports = {
  issue,
  decode,
}