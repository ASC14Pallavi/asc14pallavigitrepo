import {product} from "./products";
export class ProductManager{
    private products :product[]=[];
    addProduct(Product:product):void{
        this.products.push(Product);
    }
    listProducts():product[]{
        return this.products;
    }
    removeProduct(id:number):void{
       this.products=this.products.filter(product=>product.id !==id);
    }
    

}
