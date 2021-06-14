const connection = require('../../config/mysql')

module.exports = {
  getTransactionById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM transaction WHERE transaction_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  insertTransaction: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO transaction SET ?',
        data,
        (error, result) => {
          console.log(error)
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...data
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getBalanceSender: (senderId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM balance WHERE user_id = ${senderId}`,
        (error, result) => {
          console.log(error)
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateDataSender: (userSenderId, increaseBalance) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE balance SET balance = ${increaseBalance} WHERE user_id = ${userSenderId}`,
        (error, result) => {
          console.log(error)
          if (!error) {
            const newResult = {
              userId: userSenderId,
              ...increaseBalance
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getBalanceReceiver: (receiverId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM balance WHERE user_id = ${receiverId}`,
        (error, result) => {
          console.log(error)
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  updateDataReceiver: (userReceiverId, decreaseBalance) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE balance SET balance = ${decreaseBalance} WHERE user_id = ${userReceiverId}`,
        (error, result) => {
          console.log(error)
          if (!error) {
            const newResult = {
              userId: userReceiverId,
              ...decreaseBalance
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  updateData: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user SET ? WHERE user_id = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM user WHERE user_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
