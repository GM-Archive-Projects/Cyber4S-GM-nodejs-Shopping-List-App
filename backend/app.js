const express = require("express");
const app = express();
const port = 3000;

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
  },
];

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send(homeFile);
//   });

app.get("/products", (req, res) => {
  res.json(products);
});
