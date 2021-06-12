const express = require('express')
const Route = express.Router()
// const trabsactionController = require('./transaction_controller')

const {
  getTransactionById,
  insertTransaction
} = require('./transaction_controller')

Route.get('/:id', getTransactionById)
Route.post('/insertransaction', insertTransaction)
module.exports = Route
