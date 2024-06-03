const express = require("express");
const uuid = require("uuid");

const admin = require("../libs/firestore.admin");
const config = require("../config");

const db = admin.getDb();

const router = express.Router();

router.post("/", (req, res) => {
  const { body } = req;
  if (!body.snippet) {
    return res.status(400).json({ message: "snippet is required" });
  }

  const { snippet } = body;
  const id = uuid.v4();

  db.collection(config.SNIPPET_COLLECTION)
    .doc(id)
    .set({ snippet })
    .then(() =>
      res.status(200).json({ message: "Snippet created", snippetId: id })
    )
    .catch((error) =>
      res
        .status(500)
        .json({ message: "Error while creating the snippet", error })
    );
});

router.get("/:snippetId", async (req, res) => {
  const { snippetId } = req.params;
  db.collection(config.SNIPPET_COLLECTION)
    .doc(snippetId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.status(200).json({
          message: "Snippet found",
          content: {
            snippetId,
            snippet: doc.data().snippet,
          },
        });
      } else {
        res.status(404).json({ message: "Snippet not found" });
      }
    })
    .catch((error) =>
      res
        .status(500)
        .json({ message: "Error while getting the snippet", error })
    );
});

module.exports = router;
