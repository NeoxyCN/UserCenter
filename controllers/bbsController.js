const model = require('../models/bbs')

exports.read = (req, res) => {
    var postid = req.query.id
    res.render('bbs_read', {
        user_name:"Neoxy",
        title: "Test post",
        post_id: postid,
        content:"123\n233"
    })
}

exports.readList = (req, res) => {
    res.render('bbs_index', {
        title: "233",
        user_name: "Neoxy"
    })
}