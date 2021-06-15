const express = require('express')
const Route = express.Router()
// const authController = require('./auth_controller')

const { activateAccount } = require('./auth_activation_controller')

Route.patch('/:id', activateAccount)
module.exports = Route
