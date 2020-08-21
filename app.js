const express = require('express');
const route = require('./route')
var partials = require('express-partials');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');// 设置模板位置
app.set('view engine', 'ejs');// 设置渲染引擎为EJS
app.use(partials());
app.use(express.static(__dirname + '/public'))// 设置公共目录

app.get('/login', route.login);
app.get('/logout', route.logout);
app.get('/register', route.register);
app.get('/forgotpassword', route.forgotpassword);
app.get('/user/:username', route.userInfo);
app.post('/login', route._login);
app.post('/register', route._register);

app.listen(port, () => console.log(`Usercenter listening on port ${port}!`));
