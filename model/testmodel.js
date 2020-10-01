const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newtestschema = new Schema({
    name: {
        type: String
    },
    postId: {
        type: String,
        required: true
    },
    title: {
        type: String
    }
}, {timestamps: true});
const test_ = mongoose.model('test', newtestschema, 'Testmodel')
module.exports = test_;