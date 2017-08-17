let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let rosterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    number: Number,
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    past: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }, 
    years: {
        type: Number,
        required: true
    },
    img: String
})

module.exports = mongoose.model("rosterlist", rosterSchema)