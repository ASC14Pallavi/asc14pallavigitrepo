"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(Product) {
        this.products.push(Product);
    }
    listProducts() {
        return this.products;
    }
    removeProduct(id) {
        this.products = this.products.filter(Product => Product.id !== id);
    }
}
exports.ProductManager = ProductManager;
