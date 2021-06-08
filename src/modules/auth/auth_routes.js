const express = require('express')
const Route = express.Router()
// const authController = require('./auth_controller')

const { register, login, getUserById } = require('./auth_controller')

Route.post('/register', register)
Route.post('/login', login)
Route.get('/:id', getUserById)
module.exports = Route
