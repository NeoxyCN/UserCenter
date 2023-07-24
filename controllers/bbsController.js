const model = require('../models/bbs')

exports.read = (req, res) => {
    var postid = req.query.id
    res.render('bbs_read', {
        user_name:"Neoxy",
        title: "这是一篇测试帖子",
        post_id: postid,
        content:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈sdaklfh"
    })
}

exports.readList = (req, res) => {
    res.render('bbs_index', {
        title: "233",
        user_name: "Neoxy"
    })
}