let hobbies = [
    {
        id: 1,
        lista: [
            "Explorar senderos en la naturaleza",
            "Experimentar con recetas en la cocina",
            "Disfrutar de juegos de mesa y películas",
            "Visitar museos o exposiciones",
            "Practicar deportes al aire libre"
        ],
        tipo : "en familia"
    },
    {
        id: 2,
        lista: [
            "Bailar juntos en clases de baile",
            "Tener un romántico picnic en el parque",
            "Realizar proyectos de bricolaje en casa",
            "Viajar a nuevos destinos",
            "Disfrutar de sesiones de masajes relajantes"
        ],
        tipo : "en pareja"
    },
    {
        id: 3,
        lista: [
            "Sumergirse en libros en un café acogedor",
            "Practicar meditación o yoga",
            "Aprender un nuevo idioma o habilidad",
            "Capturar momentos fotográficos en paisajes urbanos o naturales",
            "Escribir en un diario o blog personal"
        ],
        tipo: "en solitario"
    }
]
let hobbieElegido = "";
let categoria = [];
let [enFamilia,enPareja,enSolitario] = hobbies;
console.log(enFamilia.lista[2]);
alert("Elige una categoría de hobbies:\n\n1. En familia\n2. En pareja\n3. En solitario");
const eleccion = parseInt(prompt("Ingresa el número correspondiente a la categoría de hobbies que te interesa:"));

if (eleccion >= 1 && eleccion <= 3) {
    let mensaje = "Hobbies disponibles:\n";
     categoria = hobbies[eleccion - 1].lista;
    categoria.forEach((hobbie, index) => {
        mensaje += `${index + 1}. ${hobbie}\n`;
    });
    alert(mensaje);
    const eleccionHobbie = parseInt(prompt("Ingresa el número correspondiente al hobby que te interesa:"));
    if (eleccionHobbie >= 1 && eleccionHobbie <= categoria.length) {
        alert(`Hobby seleccionado: ${categoria[eleccionHobbie - 1]}`);

     hobbieElegido = categoria[eleccionHobbie - 1];
    }
    else{
        alert("La opción ingresada no es válida.");
    }
} else {
    alert("La opción ingresada no es válida.");
}

let selectorHobbiesDiv = document.getElementById("hobbies-seleccionados");

selectorHobbiesDiv.innerHTML = `<p>Uno de mis hobbies favoritos para hacer ${ hobbies[eleccion - 1].tipo} es ${hobbieElegido}</p>`