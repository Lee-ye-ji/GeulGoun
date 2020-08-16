const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
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

const Board = mongoose.model('Board', boardSchema);

// module.exports = { Comment: Board }
module.exports = { Board }