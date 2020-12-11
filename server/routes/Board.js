const express = require("express");
const router = express.Router();
const { Board }  = require("../models/Board");

// db.COLLECTION.dropIndex( { KEY: 1 } )

router.post("/write", (req, res) => {

    const board = new Board(req.body)

    board.save((err, board) => {
        if (err) return res.json({ success: false, err })
        res.status(200).json({ success: true})
    })


});

router.get("/getBoard", (req, res) => {

    //게시판 정보를 DB에서 가져와서 클라이언트에 보낸다.

    Board.find(req.body)
    .populate('writer')
    .exec((err, board) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, board })
    })
});

router.post("/detail", (req, res) => {

    Board.findOne({"_id": req.body.boardId})
    .populate('writer')
    .exec((err, board) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, board })
    })
});

router.post("/delete", (req, res) => {

    Board.findOneAndDelete({"_id": req.body.boardId})
    .populate('writer')
    .exec((err, board) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, board })
    })
});

router.post("/update", (req, res) => {

    Board.findOneAndUpdate({"_id": req.body.boardId})
    .populate('writer')
    .exec((err, board) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, board })
    })
});

module.exports = router;