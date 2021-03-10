const router = require('express').Router();
const Message = require('../models/message.model')


router.route('/').post((req, res) => {

    const messageToAdmin = req.body.message
    const email = req.body.email

    console.log(email, messageToAdmin);

    const message = new Message({
        userEmail: email,
        message: messageToAdmin
    })

    message.save((err) => {
        console.log(err);
    })

    res.json({
        message: 'message send'
    })

})





module.exports = router;