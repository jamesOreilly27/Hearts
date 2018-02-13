const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const PORT = 8332

app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.listen(PORT, () => console.log(chalk.bgBlue.white.bold(`Listening on port ${PORT}`)))
