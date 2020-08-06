const http = require('http');
const port = 3000;
const express = require("express");
const app = express()

// app.use(express.static(__dirname));
app.use(express.static('src/'))
const { readFileSync } = require('fs');
const server = http.createServer(app);




app.get("/", (req, res) => {
    const homeFile = readFileSync('src/home.html', 'utf-8');
    // const styleFile = readFileSync('src/style.css')
    res.send(homeFile);
  });



server.listen(3000, () => console.log('Pokemon app listening on port 3000!'));

