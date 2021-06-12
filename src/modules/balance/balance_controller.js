const helper = require('../../helpers/wrapper')
const balanceModel = require('./balance_model')
require('dotenv').config()

module.exports = {
  getBalanceById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await balanceModel.getDataById(id)
      if (result.length > 0) {
        return helper.response(res, 200, 'Success Get Balance By Id', result)
      } else {
        return helper.response(res, 200, 'No Balance With Such ID !', null)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  updateBalance: async (req, res) => {
    try {
      const { id } = req.params
      const { transactionSenderId, transactionReceiverId, transactionValue } =
        req.body
      const setData = {
        transaction_sender_id: transactionSenderId,
        transaction_receiver_id: transactionReceiverId,
        transaction_value: transactionValue
      }
      const result = await balanceModel.updateData(setData, id)
      return helper.response(res, 200, 'Success Update User', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params
      const result = await balanceModel.deleteData(id)
      return helper.response(res, 200, `Success Delete User ${id}`, result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
