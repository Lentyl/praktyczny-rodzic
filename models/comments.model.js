const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const commentSchema = new Schema({

    userName: {
        type: String,
        required: true

    },

    comment: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    confirmed: {
        type: Boolean,
        default: false
    }

})

const Comment = mongoose.model('Comments', commentSchema);

module.exports = Comment;