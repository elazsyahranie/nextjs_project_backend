const express = require('express')
const Route = express.Router()
// const authController = require('./auth_controller')

const {
  getAllUser,
  register,
  login,
  getUserById,
  updateUser,
  deleteUser
} = require('./auth_controller')

Route.get('/', getAllUser)
Route.post('/register', register)
Route.post('/login', login)
Route.get('/:id', getUserById)
Route.patch('/:id', updateUser)
Route.delete('/:id', deleteUser)
module.exports = Route
