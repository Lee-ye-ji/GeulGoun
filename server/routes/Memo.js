const express = require("express");
const router = express.Router();
const { Memo }  = require("../models/Memo");

router.post("/write", (req, res) => {

    const memo = new Memo(req.body)

    memo.save((err, memo) => {
        if (err) return res.json({ success: false, err })
        res.status(200).json({ success: true})
    })

})

module.exports = router;