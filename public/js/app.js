/* Name: app.js
   Version: 0.0.0.1
   Author: Neoxy
   Date: 2020.8.18
*/
$(document).ready(function () {
    $('#loginbutton').click(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username == '' || password == '') {
            $('#message').html('用户名和密码不能为空');
        } else {
            alert('username:' + username + ' password:' + password);
            $.post('./login', { username: username, password: password });
        }
    });
});