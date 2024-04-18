/*Creacion de un objeto : "Se usan comas entre atributos"

const producto1 ={
    nombre :"celular",
    precio : 2359,
    stock: 15,
}
producto1.id = "id123";

producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
*/

/*Creacion de productos con Clases */

class Product {
    constructor(id,title,price,stock,images,onsale,supplier ){
        this.id = id;
        this.title =title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
    }
    get getSupplier(){
        return this._supplier;
    }
    set setSupplier(newName){
        this._supplier = newName;
    }
    sellUnits(units) {
        if (this.stock >= units) { // Verificar si hay suficiente stock
            //this.stock -= units;
            this.stock=this.stock - units
            console.log(`Se han vendido ${units} unidades de ${this.title}`);
        } else {
            console.log(`Error: No hay suficiente stock para vender ${units} unidades de ${this.title}`);
        }
    }
}


let prod1 = new Product(123,"celular",350,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true);
let prod2 = new Product(213,"TV 50 pulgadas",1500,10 ,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false);
let prod3 = new Product(312,"Laptop 14pulgadas ",1280,1,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true);
let prod4 = new Product(323,"Laptop 16pulgadas ",1380,1,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false,"HP");
let prod5 = new Product(323,"Tablet ",700,12,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false,"HP");

//console.log(prod1);
//console.log(prod2);
//console.log(prod3);
/*console.log(prod4._supplier);
prod4._supplier = "Dell";
console.log(prod4);*/
console.log(prod5.stock);
prod5.sellUnits(10);
console.log(prod5.stock);
prod5.sellUnits(20); // Intentar vender más unidades de las disponibles
console.log(prod5.stock);