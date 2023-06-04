const mysql = require('./mysql')

exports.add = (param) => {
    mysql('user').insert(param)
}

exports.select_max = (param) => {
    return (mysql('user').max(param))
}