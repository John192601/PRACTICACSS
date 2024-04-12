
/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

function añadirtexto() {
    let text = document.querySelector(".mensaje2");
    text.innerHTML = "Boton funcionando";
    
        text.classList.toggle("cambiarcolor");
      }

     
      var nombre = prompt("Cual es tu nombre");  
      console.log("Tu nombre " + nombre + " Esta bien bonito");
      alert("Hola Bienvenido a mi pagina " + nombre)