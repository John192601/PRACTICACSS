const query = location.search;

const params = new URLSearchParams(query);

const idProduct = params.get('id');

// actualiza el valor de id
//params.set("id",1584);
//console.log(`nuevo id ${params}`);
function printDetails(id) {
    let productoEncontrado = products.find(product => product.id == id);
    console.log(productoEncontrado);
    templateProduct = `
    
          <section class="product-images-block">
            <div class="product-images">
              <img
                class="mini-img"
                src="https://pm1.aminoapps.com/7706/0369015221a1b48e3e6b0440906e82d1abc9dd49r1-430-512v2_uhq.jpg"
                alt="MacBook Pro 13'4"
                onclick ="changeMini(event)"
              />
              <img
                class="mini-img"
                src=${productoEncontrado.images} 
                alt="MacBook Pro 13'4"
                onclick ="changeMini(event)"
              />
            </div>
            <img
              class="big-img"
              id="big-img"
              src=${productoEncontrado.images} 
              alt="MacBook Pro 13'4"
            />
          </section>
          <div class="product-description-block">
            <h1 class="product-title">${productoEncontrado.title} </h1>
            <form class="product-selector">
              <fieldset class="product-fieldset">
                <label class="product-label" for="color">Color</label>
                <select
                  class="product-select"
                  type="text"
                  placeholder="Selecciona un color"
                  id="color"
                >

                ${productoEncontrado.color.map(
                    (each) => `<option id="color" value=${each}>${each}</option>`
                 ).join("")}
                </select>
              </fieldset>
            </form>
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>
                Experience the power of creativity with the MacBook Pro 13'4.
                Featuring 8GB of RAM and 512GB of storage, this laptop provides
                the performance and storage capacity needed for demanding tasks.
                The sleek design in silver and space gray adds a touch of
                sophistication. The high-resolution Retina display brings your
                visuals to life, whether you're editing photos, creating videos,
                or simply browsing the web. With the latest technology and a
                lightweight build, the MacBook Pro 13'4 is the perfect companion
                for professionals and creative individuals alike.
              </p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">$${productoEncontrado.price} </h2>
              <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
              </p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/truck.png" alt="Truck"
                  /></span>
                  <span class="policy-desc"
                    >Agrega el producto al carrito para conocer los costos de
                    envío</span
                  >
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/plane.png" alt="Plane"
                  /></span>
                  <span class="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span
                  >
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input id="quantity" type="number" min="1" value="1" onchange="changeSubtotal()"/>
                  <button onclick="saveProduct()" type="button" class="cart-btn">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        
    `
    //arrayColors = productoEncontrado.color
    
    //console.log(arrayColors);
    let detailsSelector = document.getElementById("details");
    detailsSelector.innerHTML = templateProduct;
  

}
printDetails(idProduct);

// ${productoEncontrado.color.map
//     (color => `<option value=${color}>${color} </option>`).join("")  
//               }

function changeMini(event) {
  
  const selectedSrc = event.target.src;
  
  const bigSelector = document.querySelector("#big-img");
  
  bigSelector.src = selectedSrc;
}

/*Define la función changeSubtotal para que:*/
function changeSubtotal() {
  let cantidadProductos = event.target.value;
  //guarde en una variable la cantidad de productos a comprar
  
  //busque el producto
  let productoAnadido = products.find(product => product.id == idProduct);
  
  //calculo el subtotal
  let subTotal = productoAnadido.price * cantidadProductos;
  
  //seleccione la etiqueta donde se renderizar el subtotal
  const subtotalSelector = document.querySelector("#price");
  //actualice la vista con la imagen agrandada seleccionada
  subtotalSelector.innerHTML= `$${subTotal}`;

  return subTotal

}

/* Modifica la función printDetails para que el botón “añadir” tenga asignado un evento de click “en línea”. Cada click del botón debe ejecutar una función que guarde los datos más importantes del producto. Utiliza el atributo onclick para que ejecute la función saveProduct. A modo de ejemplo: */
//Define la función saveProduct para que:
function saveProduct() {
  
  console.log("funcion invocada " + idProduct);
  console.log(products[1].id);
  //busque un producto con el id
  let productoEncontrado = products.find(product => product.id == idProduct);
  let productoCarrito = {
    id: idProduct,
    title: productoEncontrado.title,
    // price: productoEncontrado.price * document.getElementById("quantity").value,
    price: productoEncontrado.price,
    quantity: document.getElementById("quantity").value,
    color: document.getElementById("color").value,
    images: document.getElementById("big-img").src,
    

  }
  alert(`añadido al carrito ${productoEncontrado.title}`);
  console.log(productoCarrito);
 

  if (localStorage.getItem("carrito")){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    // if (favoritos.some(fav => fav.id == productoAnadidoFavoritos.id)) {
    //   console.log("El producto ya se encuentra en favoritos");
    //   alert("El producto ya se encuentra en favoritos");
    //   } else{
    //       console.log("El producto no se encuentra en favoritos");
    //       favoritos.push(productoAnadidoFavoritos);
    //       localStorage.setItem("favoritos", JSON.stringify(favoritos));
    //   }
        if (carrito.some(producto=>producto.id == productoEncontrado.id)) {
          console.log("El producto ya se encuentra en el carrito");
          alert("El producto ya se encuentra en el carrito");
        }
        else{
          console.log("El producto no se encuentra en el carrito");
          carrito.push(productoCarrito);
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
        
    
  } else {
    let carrito = [];
    carrito.push(productoCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
}
// let sumatoria = 0;
// let totalCarrito = JSON.parse(localStorage.getItem("carrito")).map(price => price.price);
// console.log(totalCarrito);
//  for (let index = 0; index < totalCarrito.length; index++) {
//   const total = totalCarrito[index];
  
//    sumatoria = sumatoria + total;
//   console.log(`este es el total del ${index} item ${total}`);
//   console.log(`este es el total del carrito ${sumatoria}`);
  
//  }
//  console.log(`este es el total del carrito ${sumatoria}`);

let carritoIconNotificationArray = JSON.parse(localStorage.getItem("carrito"));
let carritoIconNotification = carritoIconNotificationArray.length;
console.log(carritoIconNotification);
