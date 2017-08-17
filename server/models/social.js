let mongoose = require("mongoose");
let Schema = mongoose.Schema

let socialSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
        default: 0 
    },
    downvote: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model("sociallist", socialSchema)