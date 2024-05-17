/* Abre el archivo cart.js y define una variable cartproducts.

Asigna a esta variable un array con los productos del localStorage.

Analiza la tarjeta del producto del carrito diseñada en la actividad anterior e identifica las propiedades de cada producto.

Define las funciones necesarias para renderizar dinámicamente todos los productos agregados al carrito. A modo de ejemplo createCartCard para crecibir un objeto (producto) y retornar un template dinamico) y printCartCards para recibir un array de productos y luego imprimir en la vista las tarjetas.

Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente. */
let cartProducts = JSON.parse(localStorage.getItem("carrito"))
console.log(cartProducts);

function createCartCard(cartProductsArray,etiqueta) {
let template = "";
    cartProductsArray.forEach(e => {
        e=`
        <div class="product-cart">
            
              <img
                class="product-img"
                src=${e.images}
                alt="producto"
              />
            
            <div class="product-details">
              <h2 class="product-name">${e.title}</h2>
              <p>${e.color}</p>
              <p class="product-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi adipisci alias eos quae perferendis quo reiciendis
                culpa deleniti eum sequi quos enim magnam modi et, sint rerum
                similique eveniet tempore!
              </p>
              <span class="product-price">PEN S/ ${e.price}</span>
                <input class="product-input" onchange="changeQuantity(event)" type="number"  value=${e.quantity} id=${e.id} min="1"/>
              
            </div>

           <img id="${e.id}" onclick=addFavorites() class="favoritos icon-favorites" src=/assets/favorites.jpg alt="favoritos">
          </div>

        `
        template = template + e;
    });
    document.getElementById(etiqueta).innerHTML = template;
}
createCartCard(cartProducts, "cartproducts")

function createResumeCard(cartProductsArray,etiqueta) {
    let template="";
    let total= 0;
    
    let suma = cartProductsArray.reduce((acc,item)=>{
      console.log(item.price * item.quantity);
      console.log(acc);
      return acc = acc + item.price * item.quantity;
    },0);
    console.log(suma);
    cartProductsArray.forEach(e => {
         total = total + e.price * e.quantity;

    })
    template=`<div class="cart-resume">
    <div class="cart-data">
      <span class="cart-title">Resumen del pedido</span>
      <div class="cart-total"><span>Total</span> <span>PEN ${total}</span></div>
      <div class="cart-total"><span>Total</span> <span>PEN metodo reduce ${suma}</span></div>
      <span class="cart-tax">Precio incluye impuestos y envio</span>
      <button id ="buy" class="cart-btn" type="submit">Comprar</button>

  </div>`;
    document.getElementById(etiqueta).innerHTML = template;
}
createResumeCard(cartProducts, "total")
//llamar a la funcion que cambia el quantity del objeto del carrito
changeQuantity = (event) => {
  //encontrar el producto en el carrito
    let productoEncontradoCarrito = cartProducts.find(
      (e) => e.id == event.target.id

    )
    console.log(productoEncontradoCarrito);
  productoEncontradoCarrito.quantity = event.target.value;
 
  for (let index = 0; index < cartProducts.length; index++) {
    if (cartProducts[index].id == event.target.id) {
      cartProducts[index] = productoEncontradoCarrito;
      console.log(cartProducts[index]);
      createResumeCard(cartProducts,"total");
      localStorage.setItem("carrito", JSON.stringify(cartProducts));
      
    }
    
  }




}

function addFavorites(){
let target = event.target;
target.classList.add("icon-favorites-selected");

let productoAnadidoFavoritos = products.find(product => product.id == target.id);
console.log(productoAnadidoFavoritos);


if (localStorage.getItem("favoritos") ){
    console.log("favoritos ya existen");
     favoritos = JSON.parse(localStorage.getItem("favoritos"));
        if (favoritos.some(fav => fav.id == productoAnadidoFavoritos.id)) {
        console.log("El producto ya se encuentra en favoritos");
        alert("El producto ya se encuentra en favoritos");
        } else{
            console.log("El producto no se encuentra en favoritos");
            favoritos.push(productoAnadidoFavoritos);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
    
  } else {
    console.log("favoritos no existen");
     favoritos = [];
    favoritos.push(productoAnadidoFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
favoritos=JSON.parse(localStorage.getItem("favoritos"));
console.log(favoritos);
};
