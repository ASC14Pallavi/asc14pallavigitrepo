"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("welcome");
const productManager_1 = require("./productManager");
const productManager = new productManager_1.ProductManager;
const Product = { id: 1,
    name: 'Samsung Galaxy S21',
    category: 'Mobile',
    price: 80000,
    rating: 4.5,
    reviewsCount: 100,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2021-01-29',
    colour: 'red',
    storage: 'yes'
};
productManager.addProduct(Product);
let products = productManager.listProducts();
console.log(products);
const product2 = {
    id: 2,
    name: 'Samsung Galaxy S20',
    category: 'Mobile',
    price: 70000,
    rating: 4.3,
    reviewsCount: 90,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2020-02-11',
    colour: 'green',
    storage: 'yes'
};
productManager.addProduct(product2);
console.clear();
products = productManager.listProducts();
console.log(products);
productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);
