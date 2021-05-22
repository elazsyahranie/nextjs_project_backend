const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const xss = require('xss-clean')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const routerNavigation = require('./routes')

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
app.use('/backend3/api/v1', routerNavigation)
app.use('/backend3/api', express.static('src/uploads'))

app.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`)
})
