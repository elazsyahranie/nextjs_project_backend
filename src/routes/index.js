const express = require('express')
const Route = express.Router()
const authRouter = require('../modules/auth/auth_routes')

// Untuk URL di Postman
Route.use('/auth', authRouter)
module.exports = Route
