
// 3. Abre el archivo buy.js y define una variable buySelector para seleccionar con el método getElementById la etiqueta del botón “Finaliza tu compra”.
let buySelector = document.getElementById("buy");
// 4. El selector debe escuchar un evento de click para que cada click ejecute una función. La función necesita:
buySelector.addEventListener("click", function () {
    console.log(`hola`);
    cartProducts=JSON.parse(localStorage.getItem("carrito"));
    cartProducts= [];
    localStorage.clear();
    createCartCard(cartProducts, "cartproducts")
    createResumeEmpty(cartProducts, "total")
    
})
if(cartProducts.length == 0){
    console.log("carrito vacio");
    alert("carrito vacio")
    
}
function createResumeEmpty(cartProductsArray,etiqueta) {
    let template="";
    let total= 0;
    template=`<div class="cart-resume">
    <div class="cart-data">
      <span class="cart-title">No tienes productos en el carrito</span>
      <div class="cart-total"><span>Total</span> <span>PEN ${total}</span></div>
      
      

  </div>`;
    document.getElementById(etiqueta).innerHTML = template;
}
// borrar todos los productos del array cartproducts

// Borrar todos los productos del localStorage

// actualizar la impresión de las tarjetas de productos del carrito (sin productos)

// actualizar la impresión del cuadro de detalle del total (sumando cero)

// 5. Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.

// 6. Condiciona el renderizado de la vista para que informe al usuario que no hay productos en el carrito cuando efectivamente no hay productos en el localStorage.