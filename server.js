const http = require('http');
const express = require("express");
const fs = require("fs");
const { stringify } = require('querystring');
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
    const filepath = path.join(__dirname, "/src", "index.html");
    res.sendFile(filepath);
});

app.get("/rules", (req, res) => {
    console.log("test");
    const filepath = path.join(__dirname, "/src", "rules.html");
    res.sendFile(filepath);
});

/*app.get("/login", (req, res) => {
    const filepath = path.join(__dirname, "/src", "login.html");
    res.sendFile(filepath);
});*/

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
