const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

require("./database")

const routes = require('./routes')
app.use(routes)

app.listen(3333)