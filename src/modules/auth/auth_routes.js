const express = require('express')
const Route = express.Router()
// const authController = require('./auth_controller')

const { register } = require('./auth_controller')

Route.post('/register', register)
module.exports = Route
