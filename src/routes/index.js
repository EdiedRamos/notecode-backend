const express = require("express");
const codeRouter = require("./code.router");

function routerApi(app) {
  const router = express.Router();
  router.use("/code", codeRouter);
  app.use("/api/v1", router);
}

module.exports = routerApi;
