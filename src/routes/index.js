const express = require('express')
const Route = express.Router()
const authRouter = require('../modules/auth/auth_routes')
const balanceRouter = require('../modules/balance/balance_routes')
const transactionRouter = require('../modules/transaction/transaction_routes')

// Untuk URL di Postman
Route.use('/auth', authRouter)
Route.use('/balance', balanceRouter)
Route.use('/transaction', transactionRouter)
module.exports = Route
