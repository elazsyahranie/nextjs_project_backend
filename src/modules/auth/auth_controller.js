const helper = require('../../helpers/wrapper')
const bcrypt = require('bcrypt')
const authModel = require('./auth_model')
require('dotenv').config()
// const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    try {
      const { userFullName, userPassword } = req.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(userPassword, salt)
      console.log(`before Encrypt = ${userPassword}`)
      console.log(`after Encrypt = ${encryptPassword}`)
      const setData = {
        user_name: userFullName,
        user_password: encryptPassword
      }
      console.log(setData)
      const result = await authModel.register(setData)
      delete result.user_password
      return helper.response(res, 200, 'Success Register User', result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
