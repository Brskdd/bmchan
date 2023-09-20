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

app.get("/s", (req, res) => {
    console.log("test");
    const filepath = path.join(__dirname, "/src", "s.html");
    res.sendFile(filepath);
});

app.get("/b", (req, res) => {
    console.log("test");
    const filepath = path.join(__dirname, "/src", "b.html");
    res.sendFile(filepath);
});

app.get("/homebanner", (req, res) => {
    const filepath = path.join(__dirname, "/media", "homebanner.png");
    res.sendFile(filepath);
});

app.get("/rulesbanner", (req, res) => {
    const filepath = path.join(__dirname, "/media", "rulesbanner.png");
    res.sendFile(filepath);
});

app.get("/sbanner", (req, res) => {
    const filepath = path.join(__dirname, "/media", "sbanner.png");
    res.sendFile(filepath);
});

app.get("/bbanner", (req, res) => {
    const filepath = path.join(__dirname, "/media", "bbanner.png");
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
