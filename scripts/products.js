class Product {
    constructor(id,title,price,stock,images,onsale,discount,color ){
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.discount = discount;
        this.color= color;
    }

    sellUnits(units) {
        if (this.stock >= units) { // Verificar si hay suficiente stock
            this.stock -= units;
            console.log(`Se han vendido ${units} unidades de ${this.title}`);
        } else {
            console.log(`Error: No hay suficiente stock para vender ${units} unidades de ${this.title}`);
        }
    }
}
       

let prod1 = new Product(1,"celular","350",3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true,"15%",["blue"]);
let prod2 = new Product(2,"TV 50 pulgadas",1500,10 ,"https://www.efe.com.pe/media/catalog/product/h/y/hyled5015a4km_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",false,"10%",["blue"]);
let prod3 = new Product(3,"Laptop 14pulgadas ",1280,1,"https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/8/W/8W6D3LA-1_T1699892564.png",true,"10%",["blue"]);
let prod4 = new Product(4,"Laptop 16pulgadas ",1380,1,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false,"0.5%",["red","black","blue"]);
let prod5 = new Product(5,"Tablet ",700,12,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false,"50%",["red","black","blue","white"]);
let prod6 = new Product(6,"PC Gamer",1700,2, "https://w7.pngwing.com/pngs/758/250/png-transparent-megaport-pc-gamer-amd-fx-6100-gaming-computer-desktop-computers-computer-cases-housings-computer-electronics-computer-laptop-thumbnail.png", true,"20%",["blue","Gris"]);

const products = [prod1,prod2,prod3,prod4,prod5,prod6];
const productContainer = document.getElementById("products");


//aca "element" itera con los elementos del array product, heredando sus atributos
/*-products.forEach(element => {
    //aca se agrega el elemento al template

    element =`
    <a class="product-card" href="./details.html">
    <img
      class="product-img"this
      src=${element.images}
      alt=${element.title}
    />
    <div class="product-info">
      <span class="product-title">${element.title}</span>
      <span class="product-description">${element.color}</span>
      <div class="product-price-block">
        <span class="product-price">${element.price}</span>
        <span class="product-discount">${element.discount} Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  `
  templateProduct = templateProduct + element;    
});
//la plantilla se agrega al contenedor 
productContainer.innerHTML = templateProduct;-*/


