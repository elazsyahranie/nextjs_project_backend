const express = require('express')
const Route = express.Router()

const { getRoomChatById } = require('./room_chat_controller')

Route.get('/:id', getRoomChatById)
module.exports = Route
