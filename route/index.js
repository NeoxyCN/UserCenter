exports.login = function (req, res) {
    res.render('login',{title:'登录',layout:'layout'});
};

exports.logout = function (req, res) {

};

exports.register = function (req, res) {

};

exports.forgotpassword = function (req, res) {

};

exports.userInfo = function (req, res) {

};

// POST_LOGIN
exports._login = function (req, res) {
    console.log('123');
    res.send('hello'+req.params.username+'password:'+req.params.password);
    
};

exports._register = function (req, res) {

};