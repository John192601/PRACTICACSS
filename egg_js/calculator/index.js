const cantidad = Number(prompt("¿Cuantos numeros  desea sumar?"));
let sumatoria = 0;

for (let i = 1; i <= cantidad; i++ ){
    const Numero_a_sumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + Numero_a_sumar;


}
alert("la cantidad sumada es: " + sumatoria);