const path = require('path')
const express = require('express')

const projRoute = require('../routes/projects')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/projects', projRoute)

module.exports = server
