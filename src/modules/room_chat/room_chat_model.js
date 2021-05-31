const connection = require('../../config/mysql')

module.exports = {
  getDataChatById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM room_chat JOIN user ON room_chat.user_id = user.user_id WHERE room_chat.friend_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
