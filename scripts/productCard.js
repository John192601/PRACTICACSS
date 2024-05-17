fetchProductos=() => {
  fetch("./json/products.json")
  
  .then((response) => response.json())
  .then((data) => {
    console.log(data.products);
    impresionTarjetas(data.products, "products");
    
  })
}
function impresionTarjetas(arrayOfProducts, etiqueta ){
    let templateProduct ="";
    
    arrayOfProducts.forEach(element => {
      //aca se agrega el elemento al template
      element =`
      <a class="product-card" href="./details.html?id=${element.id}">
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
      
    })
  //la plantilla se agrega al contenedor
  const productContainer = document.getElementById(etiqueta);
  document.getElementById(etiqueta).innerHTML = templateProduct;
  }
  
  // impresionTarjetas(products, "products");