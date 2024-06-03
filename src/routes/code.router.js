const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { body } = req;
  if (!body.code) {
    return res.status(400).json({ message: "Code is required" });
  }
  const { code } = body;
  console.log({ code });
  res.status(200).json({ message: "Code created" });
});

router.get("/:codeId", (req, res) => {
  const { params } = req;
  console.log({ params });
  res.send("Searching code");
});

module.exports = router;
