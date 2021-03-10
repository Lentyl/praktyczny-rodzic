const router = require('express').Router();
const Comment = require('../models/comments.model');



router.route('/addComent').post((req, res) => {

    const comment = req.body.comment;
    const userName = req.body.userName;
    const title = req.body.title;


    const newComment = new Comment({
        userName,
        comment,
        title
    });


    newComment.save((err) => {
        console.log(err);
    })

    res.json({
        message: 'message send'
    })
})


module.exports = router;