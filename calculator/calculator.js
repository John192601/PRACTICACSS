function solicitarNumeros() {
    const num1 = prompt("Introduce el primer número:");
    const num2 = prompt("Introduce el segundo número:");
    dividir(num1, num2, manejarError);
    }
function dividir(num1, num2, callback) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num2 === 0) {
        callback('Error: No se puede dividir por 0.');
        return;
    }
    if (isNaN(num1) || isNaN(num2)) {
    callback('Error: Ambos valores deben ser numéricos.');
    return;
    }
   const result = num1 / num2;
    mostrarResultado(result);
   
    }
 

function manejarError(mensaje) {
    console.log(mensaje);
    alert(mensaje);
    }
function mostrarResultado(resultado){
    console.log(resultado);
    alert(`El resultado es: ${resultado}`);
    let divSelector = document.getElementById('calculator');
    console.log(divSelector);
    divSelector.innerHTML = `El resultado es: ${resultado}`
}

document.addEventListener('DOMContentLoaded', solicitarNumeros);