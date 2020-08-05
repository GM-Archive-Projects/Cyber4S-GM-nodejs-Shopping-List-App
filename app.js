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

// defaults
axios.defaults.baseURL = "http://pokeapi.co/api/v2/pokemon";
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;

// const express = require("express");
// const app = express();
// const { readFileSync } = require('fs');
/*
let products = [
    {
        id: 120,
        name: "Milk",
        price: 2,
        ammout: 3,
    },
    {
        id: 121,
        name: "Eggs",
        price: 3,
        ammout: 2,
    },
    {
        id: 122,
        name: "Cheese",
        price: 7,
        ammout: 1,
    },
    {
        id: 123,
        name: "Bread",
        price: 1,
        ammout: 6,
    },
    {
        id: 124,
        name: "Cigarretes",
        price: 300,
        ammout: 3,
    }
// ]
// */

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.status(200)
//     const homeFile = readFileSync('./home.html', 'utf8');
//     res.send(homeFile);
//   });


// app.get("/products", (req, res) => {
//     res.status(200).json(products)
//     });

// module.exports = app;



