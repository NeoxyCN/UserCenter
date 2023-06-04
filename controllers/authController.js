const model = require('../models/auth')

exports.auth_login = (req, res) => {
    model.add({

    })
    res.send('NA');
}

exports.auth_register = (req, res) => {
    // mysql('user').insert({ id: 1, username: 'Neoxy', password: '1' }).then(rows => {
    //   console.log(rows)
    const max_id = model.select_max('id')
        .then(rows => {
            console.log(rows)
        })
    const new_id = max_id + 1
    var i = model.add({
        id: new_id,
        username: req.query.username,
        password: req.query.password
    })
    console.log(i)
    res.send({
        code: 0,
        message: "register success"
    })
}

exports.auth_forgot = (req, res) => {
    res.send('NA');
}

exports.auth_delete = (req, res) => {
    res.send('NA');
}