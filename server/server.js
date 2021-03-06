const path = require('path')
const express = require('express')

const projRoute = require('../routes/projects')
const issueRoute = require('../routes/issues')
const detailRoutes = require('../routes/details')
const authRoutes = require('../routes/auth')
const userRoutes = require('../routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(express.urlencoded({extended: false}))

server.use('/api/v1/projects', projRoute)
server.use('/api/v1/issues', issueRoute)
server.use('/api/v1/details', detailRoutes)
server.use('/api/auth', authRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server
