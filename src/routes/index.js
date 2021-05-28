const express = require('express')
const Route = express.Router()
const authRouter = require('../modules/auth/auth_routes')

Route.use('/auth', authRouter)
module.exports = Route
