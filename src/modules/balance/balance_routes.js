const express = require('express')
const Route = express.Router()
// const authController = require('./auth_controller')

const { getBalanceById } = require('./balance_controller')

Route.get('/:id', getBalanceById)
module.exports = Route
