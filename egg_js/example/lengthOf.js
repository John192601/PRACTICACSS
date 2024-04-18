function lengthOf(text) {
    if (text === "") {
        return "Entrada invalida";
    } else {
        return text.length;
    }
}


console.log(lengthOf("Hola")); // Output: 4
console.log(lengthOf("")); // Output: "Entrada invalida"
console.log(lengthOf("¡Hola, mundo!")); // Output: 12