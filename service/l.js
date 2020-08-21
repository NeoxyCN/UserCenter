var fs = require("fs");
var t;

// 异步读取


exports.l = function () {
    fs.readFile('./config.json', function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            console.log("异步读取: " + data.toString());
            t=data.toString();
            
        }


    });
}

exports.kkk = function () {
    console.log('1:'+t);
    return t;
}