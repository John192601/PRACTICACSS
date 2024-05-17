let favoritesSelector = document.getElementsByClassName("favoritos");


// implementa un evento click para el botón "Agregar a Favoritos". Al hacer click en uno de estos botones, el producto deberá agregarse a la lista de favoritos.

// Utiliza el objeto localStorage para almacenar los productos marcados como favoritos. Cada vez que se agrega un producto a la lista de favoritos, actualiza el almacenamiento local.


// Implementa la funcionalidad para mostrar los productos favoritos en el área designada de la página. Recupera la información almacenada en localStorage y actualiza dinámicamente la sección de favoritos.

let favoritos = [];
favoritos = JSON.parse(localStorage.getItem("favoritos"));
console.log(favoritos);
createCartCard(favoritos, "favoritos-cart")
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
  
             <img id="${e.id}" onclick=removeFavorites() class="favoritos icon-favorites" src=/assets/favorites.jpg alt="favoritos">
            </div>
  
          `
          template = template + e;
      });
      document.getElementById(etiqueta).innerHTML = template;
  }
function removeFavorites() {

  let target = event.target;
  let productoAnadidoFavoritos = favoritos.find(product => product.id == target.id);
console.log(productoAnadidoFavoritos);
console.log(favoritos);
favoritos = favoritos.filter(e => e.id != productoAnadidoFavoritos.id);
console.log(favoritos);
localStorage.setItem("favoritos", JSON.stringify(favoritos));
createCartCard(favoritos, "favoritos-cart")

}
//falta añadir un some para comprobar si el producto se encuentra en carrito y favoritos para mantener la clase