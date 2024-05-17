function captureText(event){
    //obtenemos el texto del input
    let text = event.target.value;
    
    //obtenemos el elemento a filtrar
    return text.toLowerCase() 
    
  

    
}

const searchSelector = document.querySelector("#search");

//se agrega el event listener y la función
searchSelector.addEventListener("keyup",e=>{captureText(e)
    
    let busquedaFiltrada = captureText(e);
   
    
    let productosFiltrados = products.filter(product => product.title.toLowerCase().includes(busquedaFiltrada));
    //se encuentra el array de productos filtrados
    //console.log(productosFiltrados);
    // se imprime el array de productos filtrados
    impresionTarjetas(productosFiltrados.sort((a,b)=>a.title.localeCompare(b.title)), "products");
});


