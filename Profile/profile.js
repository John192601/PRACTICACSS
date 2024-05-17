class Persona {
    constructor(nombre,edad,profesion,ubicacion,hobby){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.ubicacion = ubicacion;
        this.hobby = hobby;
    }
}

let persona1 = new Persona("Juan", 25, "Desarrollador Web", "Buenos Aires", "Leer");
let persona2 = new Persona("Pedro", 30, "Diseñador Web", "CABA", "Programar");


// let isOnline = false;
// let respuesta = prompt("Estas conectado? SI NO ");
// console.log(respuesta);
// if (respuesta.toUpperCase() == "SI"  || respuesta.toUpperCase() == "NO") {
//     if (respuesta.toUpperCase() == "SI" && isOnline == false) {
//         isOnline = true;
//         console.log(`hola ${persona1.nombre} como te sientes a tus ${persona1.edad} anios, eres ${persona1.profesion} y estabas en ${persona1.ubicacion} y tu hobby es ${persona1.hobby}`);
//         alert("Usuario Conectado")
//     }
//     else if (respuesta.toUpperCase() == "NO" && isOnline == falseno) {
//         isOnline = false;
//         alert("Usuario Desconectado")
//     }
// }
// else{
//     alert("Por favor ingresa una respuesta correcta")
// }

// let perfil = document.getElementById("perfil");
// console.log(perfil);
// let template = ``;
// template = `
// <h1>${persona1.nombre}</h1>
// <p> Edad : ${persona1.edad}</p>
// <p>Profesion: ${persona1.profesion}</p>
// <p>Ubicación: ${persona1.ubicacion}</p>
// <p>Hobby: ${persona1.hobby}</p>`;

// perfil.innerHTML = template

function printPerfil(identificador,etiqueta){
let perfil = document.getElementById(etiqueta);
console.log(perfil);
let template = ``;
template = `
<h1>${identificador.nombre}</h1>
<p> Edad : ${identificador.edad}</p>
<p>Profesion: ${identificador.profesion}</p>
<p>Ubicación: ${identificador.ubicacion}</p>
<p>Hobby: ${identificador.hobby}</p>`;
console.log(template);
perfil.innerHTML= template;
}

printPerfil(persona1,"1")

let nombre = "Juan";
let edad = 25;
let profesion = "Desarrollador Web";

let persona ={nombre,edad,profesion}
console.log(persona);