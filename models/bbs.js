const mysql = require('./mysql')

exports.query = (param) => {
    mysql('user').insert(param)
}
