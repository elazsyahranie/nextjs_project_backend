const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const xss = require('xss-clean')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const routerNavigation = require('./routes')
// const socket = require('socket.io')

const app = express()
const port = process.env.DB_PORT

app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(xss())
app.use(helmet())
app.use(compression())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api/v1', routerNavigation)
app.use('/api', express.static('src/uploads'))

// const db = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE
// }

// app.post('/register', (req, res) => {
//   db.query('INSERT * INTO user (username, userpassword)')
// })

app.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`)
})
