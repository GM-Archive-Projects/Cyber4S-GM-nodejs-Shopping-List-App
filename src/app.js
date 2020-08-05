// Global Environment Variables
const shoppingApp = document.getElementById("shoppingApp");
const mainHeader = document.getElementById("mainHeader");
const controlPanel = document.getElementById("controlPanel");
const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const pokemosListButton = document.getElementById("pokemosListButton");
const sortButton = document.getElementById("sortButton");
const addButton = document.getElementById("addButton");
const searchResults = document.getElementById("searchResults");
const pokemonsDeck = document.getElementById("pokemonsDeck");
const pokemonsList = document.getElementById("pokemonsList");


const axios = require('axios');

// defaults
axios.defaults.baseURL = "http://pokeapi.co/api/v2/pokemon";
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;




// app.get("/", (req, res) => {
//     res.status(200)
//     const homeFile = readFileSync('./home.html', 'utf8');
//     res.send(homeFile);
//   });


// app.get("/products", (req, res) => {
//     res.status(200).json(products)
//     });

// module.exports = app;



