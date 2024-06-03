const express = require("express");
const snippetRouter = require("./snippet");

function routerApi(app) {
  const router = express.Router();
  router.use("/snippet", snippetRouter);
  app.use("/api/v1", router);
}

module.exports = routerApi;
