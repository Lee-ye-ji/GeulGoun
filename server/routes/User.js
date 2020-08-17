const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");


// const express = require("express");
router.post('/join', (req, res) => {

    //회원 가입 할 때 필요한 정보들을  client에서 가져오면 
    //그것들을  데이터 베이스에 넣어준다. 
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
            return res.status(200).json({
            success: true
        })
    })
})

router.post('/login', (req, res) => {

    //요청된 아이디가 데이터베이스에서 있는지 찾는다.
    User.findOne({ id: req.body.id }, (err, user) => {

    if (!user) {
        return res.json({
            loginSuccess: false,
            message: "아이디가 존재하지 않습니다."
        })
    }

      //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.pw, (err, isMatch) => {

        if (!isMatch)
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

        //비밀번호 까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);

              // 토큰을 저장한다.  어디에 ?  쿠키에다가 
                res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id })

            })
        })
    })
})


// role 0 -> 일반유저   role 0이 아니면  관리자 
router.get('/auth', auth , (req, res) => {

    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        id: req.user.id,
        pw: req.user.pw,
        name: req.user.name,
        role: req.user.role
    })
})

router.get('/logout', auth, (req, res) => {

    User.findOneAndUpdate({ _id: req.user._id },
    { token: "" }
    , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
        success: true
        })
    })
})

module.exports = router;
