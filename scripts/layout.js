const navSelector = document.getElementById("navbar");

const options = [
      { title: "Ofertas de la semana", linkTo: "./outlet.html" },
      { title: "Como Comprar", linkTo: "./how.html" },
      { title: "Impuestos", linkTo: "./taxs.html" },
      { title: "Ordenes", linkTo: "./orders.html" },
      { title: "Garantia", linkTo: "./warranty.html" },
    ];  
    for (let option of options) {
          const anchor = document.createElement("a");
          anchor.className = "nav-a";
          anchor.textContent = option.title
          anchor.href = option.linkTo
          navSelector.appendChild(anchor)
        }

    
const footerSelector = document.querySelector("#footer");

const footerOptions = [
    [
        {title:"Ofertas",linkTo:"./outlet.html"},
        {title:"Laptops",linkTo:"./laptops.html"},
        {title:"Audio",linkTo:"./audio.html"},
        {title:"Auriculares",linkTo:"./headphones.html"},
    ],

    [
        {title:"Como comprar",linkTo:"./how.html"},
        {title:"Formas de pago",linkTo:"./payment.html"},
        {title:"Envios",linkTo:"./shipping.html"},
        {title:"Devoluciones",linkTo:"./returns.html"},
    ],

    [
        {title:"Costos y tarifas",linkTo:"./prices.html"},
        {title:"Impuestos",linkTo:"./taxs.html"},
        {title:"Facturacion",linkTo:"./billing.html"},
    ],

    [
        {title:"Mis pedidos",linkTo:"./orders.html"},
        {title:"Pedir nuevamente",linkTo:"./orders.html"},
        {title:"Lista de deseos",linkTo:"./wishlist.html"},
    ]
    ,
    [
        {title:"Garantía",linkTo:"./warranty.html"},
    ]
];
for(let option of footerOptions){
    const ul = document.createElement("ul");
    ul.className = "footer-ul";
    footerSelector.appendChild(ul);
    
    for(let subOption of option){
        const li = document.createElement("li");
        li.className = "footer-li";
        const anchor = document.createElement("a");
        anchor.className = "footer-a";
        anchor.textContent = subOption.title
        anchor.href = subOption.linkTo
        li.appendChild(anchor)
        ul.appendChild(li)
    }
    
}

const productContainer = document.getElementById("products");
let templateProduct ="";
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
       

let prod1 = new Product(1,"celular","$350",3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true,"15%","red");
let prod2 = new Product(2,"TV 50 pulgadas",1500,10 ,"https://www.efe.com.pe/media/catalog/product/h/y/hyled5015a4km_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",false,"10%","black");
let prod3 = new Product(3,"Laptop 14pulgadas ",1280,1,"https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/8/W/8W6D3LA-1_T1699892564.png",true,"10%","blue");
let prod4 = new Product(4,"Laptop 16pulgadas ",1380,1,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",false,"0.5%",["red","black","blue"]);
let prod5 = new Product(5,"Tablet ",700,12,"./random.jpg",false,"50%",["red","black","blue","white"]);

const products = [prod1,prod2,prod3,prod4,prod5];

products.forEach(element => {
    console.log(element);

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
productContainer.innerHTML = templateProduct;