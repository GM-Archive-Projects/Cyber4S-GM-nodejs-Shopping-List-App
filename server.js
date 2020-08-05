const http = require('http');
const port = 3000;
const express = require("express");
const app = express()
app.use(express.json());

const { readFileSync } = require('fs');
const server = http.createServer(app);


app.get("/", (req, res) => {
    const homeFile = readFileSync('src/home.html', 'utf-8');
    const styleFile = readFileSync('src/style.css')
    res.send(homeFile);
  });


module.exports = app;

server.listen(port)

