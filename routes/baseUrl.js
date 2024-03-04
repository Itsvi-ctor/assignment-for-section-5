const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../path/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "baseHtml.html"));
});

module.exports = router;
