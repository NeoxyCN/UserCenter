const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const bbsRouter = require('./routes/bbs')

app.set('view engine', 'html')
app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/bbs', bbsRouter)

/**
 * @function Login
 * @description POST
 */
//app.post('/login', (req, res) => {
//  res.send('Hello World!')
//})

app.listen(port, () => {
  console.log(`UserCenter listening on port ${port}`)
})