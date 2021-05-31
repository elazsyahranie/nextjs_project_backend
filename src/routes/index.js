const express = require('express')
const Route = express.Router()
const authRouter = require('../modules/auth/auth_routes')
const roomChatRouter = require('../modules/room_chat/room_chat_routes')

// Untuk URL di Postman
Route.use('/auth', authRouter)
Route.use('/room_chat', roomChatRouter)
module.exports = Route
