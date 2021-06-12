const helper = require('../../helpers/wrapper')
const transactionModel = require('./transaction_model')
require('dotenv').config()

module.exports = {
  getTransactionById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await transactionModel.getDataById(id)
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          'Success Get Transaction By Id',
          result
        )
      } else {
        return helper.response(res, 200, 'No Transaction With Such ID !', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  insertTransaction: async (req, res) => {
    try {
      const { senderId, receiverId, transactionValue } = req.body
      const setData = {
        transaction_sender_id: senderId,
        transaction_receiver_id: receiverId,
        transaction_value: transactionValue
      }
      console.log(setData)
      const result = await transactionModel.insertTransaction(setData)
      return helper.response(res, 200, 'Transaction Succesful', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params
      const result = await transactionModel.deleteData(id)
      return helper.response(res, 200, `Success Delete User ${id}`, result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
