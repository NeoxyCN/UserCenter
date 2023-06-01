const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const authRouter = require('./routes/auth')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/auth', authRouter)


/**
 * @function Login
 * @description POST
 */
//app.post('/login', (req, res) => {
//  res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})