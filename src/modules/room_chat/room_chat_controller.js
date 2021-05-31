const helper = require('../../helpers/wrapper')
const roomChatModel = require('./room_chat_model')

module.exports = {
  getRoomChatById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await roomChatModel.getDataChatById(id)
      console.log(result)
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          'Success Get Data Room Chat By Id',
          result
        )
      } else {
        return helper.response(
          res,
          200,
          'Success Get Room Chat Id ... Not Found !',
          null
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
