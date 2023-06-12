const mysql = require('./mysql')

exports.get = (param) => {
    mysql('user').insert(param)
}


exports.set_status = (param) => {
    return (mysql('user').max(param))
}

exports.delete = (param) => {
    this.set_status()
}