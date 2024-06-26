require("dotenv").config();
const bodyParse = require("body-parser");
const express = require("express");
const cors = require("cors");

const { DEFAULT_PORT } = require("./config");
const routerApi = require("./routes");

const app = express();

const PORT = process.env.PORT ?? DEFAULT_PORT;

app.use(bodyParse.json());
app.use(cors());
routerApi(app);

app.listen(PORT, () => console.log(`Ready on ${PORT}`));
