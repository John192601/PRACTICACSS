const navSelector = document.getElementById("navbar");

// const options = [
//       { title: "Ofertas de la semana", linkTo: "./outlet.html" },
//       { title: "Como Comprar", linkTo: "./how.html" },
//       { title: "Impuestos", linkTo: "./taxs.html" },
//       { title: "Ordenes", linkTo: "./orders.html" },
//       { title: "Garantia", linkTo: "./warranty.html" },
//     ];  
//     for (let option of options) {
//           const anchor = document.createElement("a");
//           anchor.className = "nav-a";
//           anchor.textContent = option.title
//           anchor.href = option.linkTo
//           navSelector.appendChild(anchor)
//         }

addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado");
    fetchOptions();
    fetchProductos();
})
fetchOptions = () => {
    fetch("./json/option.json")
    .then((response) => response.json())
    .then((data) => {
        
        
        const options = data.nav;
        for (let option of options) {
                     const anchor = document.createElement("a");
                     anchor.className = "nav-a";
                     anchor.textContent = option.title
                      anchor.href = option.linkTo
                     navSelector.appendChild(anchor)
                   }
       const footerOptions = data.footerOptions;
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
    
                })
}

const footerSelector = document.querySelector("#footer");

// const footerOptions = [
//     [
//         {title:"Ofertas",linkTo:"./outlet.html"},
//         {title:"Laptops",linkTo:"./laptops.html"},
//         {title:"Audio",linkTo:"./audio.html"},
//         {title:"Auriculares",linkTo:"./headphones.html"},
//     ],

//     [
//         {title:"Como comprar",linkTo:"./how.html"},
//         {title:"Formas de pago",linkTo:"./payment.html"},
//         {title:"Envios",linkTo:"./shipping.html"},
//         {title:"Devoluciones",linkTo:"./returns.html"},
//     ],

//     [
//         {title:"Costos y tarifas",linkTo:"./prices.html"},
//         {title:"Impuestos",linkTo:"./taxs.html"},
//         {title:"Facturacion",linkTo:"./billing.html"},
//     ],

//     [
//         {title:"Mis pedidos",linkTo:"./orders.html"},
//         {title:"Pedir nuevamente",linkTo:"./orders.html"},
//         {title:"Lista de deseos",linkTo:"./wishlist.html"},
//     ]
//     ,
//     [
//         {title:"Garantía",linkTo:"./warranty.html"},
//     ]
// ];
// for(let option of footerOptions){
//     const ul = document.createElement("ul");
//     ul.className = "footer-ul";
//     footerSelector.appendChild(ul);
    
//     for(let subOption of option){
//         const li = document.createElement("li");
//         li.className = "footer-li";
//         const anchor = document.createElement("a");
//         anchor.className = "footer-a";
//         anchor.textContent = subOption.title
//         anchor.href = subOption.linkTo
//         li.appendChild(anchor)
//         ul.appendChild(li)
//     }
    
// }

