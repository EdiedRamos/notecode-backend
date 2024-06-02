const dotenv = require("dotenv");
const express = require("express");
const { DEFAULT_PORT } = require("./config");

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? DEFAULT_PORT;

app.listen(PORT, () => console.log(`Ready on ${PORT}`));
