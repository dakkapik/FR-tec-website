if (!process.env.PASSWORD) require('dotenv').config()
if (!process.env.PASSWORD) console.log("ALERT: NO PASSWORD");
const express = require('express');
const cors = require("cors");
const path = require("path");
const favicon = require('express-favicon');
const entries = require("./routes/entries");
const sheets = require("./routes/sheets");
const app = express();

const db = require("./db");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "f", "build")));
app.use(favicon(path.join('f','build','logo-fr-tec.png')));

app.use("/entries", entries);
app.use("/sheets", sheets);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(PORT, () => console.log("listening: ", PORT));