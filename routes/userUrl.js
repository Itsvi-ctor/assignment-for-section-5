const path = require("path")
const rootDir = require("../path/path")
const express = require("express")
const router = express.Router()


router.get("/user", (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "users.html"))
})

module.exports = router 