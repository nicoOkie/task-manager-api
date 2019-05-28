// NPM Imports
const express = require('express')


// Local Imports
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// Automaticaly parse Json
app.use(express.json())

// Routers
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
