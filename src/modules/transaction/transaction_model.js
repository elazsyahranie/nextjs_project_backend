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
      console.log(
        `${data.transaction_value} ${data.transaction_sender_id} ${data.transaction_receiver_id}`
      )
      connection.query(
        `BEGIN; UPDATE balance SET balance = balance - ${data.transaction_value} WHERE user_id = ${data.transaction_sender_id}; UPDATE balance SET balance = balance + ${data.transaction_value} WHERE user_id = ${data.transaction_receiver_id}; INSERT INTO transaction SET = ?; END;`,
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
