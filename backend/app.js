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

app.get("/products/:productId", (req, res) => {
  for (let product of products) {
    console.log(
      product.id,
      typeof product.id,
      req.params.productId,
      typeof req.params.productId
    );
    var productID = product.id.toString();
    console.log(product.id.toString === req.params.productId);
    if (productID === req.params.productId) {
      res.send(product);
    }
  }
});

app.post("/products/", (req, res) => {
  console.log("\n\nPost Request Entered\n");
  const isExist = products.forEach((product) => {
    if (product.id == req.body.id) {
      console.log(`${req.body.id} Exist`);
      res.send(product);
    }
  });
  if (!isExist) {
    console.log(
      `\nNew Product Added \nProduct Name = ${JSON.stringify(
        req.body
      )} \nProducts ID = ${req.body.id}`
    );
    products.push(req.body);
    console.log(
      `\n\nNew Products Shopping List After Push: \n${JSON.stringify(products)}`
    );
    res.send(`New Product Added \n ${JSON.stringify(req.body)}`);
  }
});
