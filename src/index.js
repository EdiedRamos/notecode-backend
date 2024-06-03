const dotenv = require("dotenv");
const bodyParse = require("body-parser");
const express = require("express");

const { DEFAULT_PORT } = require("./config");
const routerApi = require("./routes");

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? DEFAULT_PORT;

app.use(bodyParse.json());
routerApi(app);

app.listen(PORT, () => console.log(`Ready on ${PORT}`));
