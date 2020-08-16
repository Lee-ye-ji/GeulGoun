const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    title: {
        type: String,
        maxlength: 50
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true} );

const Memo = mongoose.model('Memo', memoSchema);

// module.exports = { Comment: Board }
module.exports = { Memo }