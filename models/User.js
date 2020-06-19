const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        trim: true,
        unique: 1
    },
    pw: {
        type: String,
        minlength: 2
    },
    name: {
        type: String,
        maxlength: 50
    },
    role:{ //관리자인지 사용자인지 판별해주는 것
        type: Number,
        default: 0
    },
    token:{ //token이용해서 유저성 검사
        type: String
    },
    tokenExp:{ //token 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }