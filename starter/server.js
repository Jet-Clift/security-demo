const express = require('express')
const cors = require('cors')
const {createMessage} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/messages', createMessage)

app.listen(4004, () => console.log('not good at all'))