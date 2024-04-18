var totalApagar = 0;
var cantidad = Number(prompt("Cuantos Productos desea?"));
while (cantidad <= 0){
 alert("Que fue mano");
 var cantidad = Number(prompt("Cuantos Productos desea?"));
}


for (let i = 1; i <= cantidad; i++ ){
    let nombre1 = prompt("Que producto desea?");
    let cantidad1 = prompt("Cuantas unidades");
    if (cantidad1 > 0){
    let precio1 = prompt("Me olvide el precio u.u.. ¿A cuanto le sale la unidad?");
    var subtotal = cantidad1 * precio1;
    console.log(subtotal);
    alert("el total del producto " + nombre1 + " es: " + subtotal);
    var totalApagar = totalApagar + subtotal;
}
 else{
    alert("Ingresa un numero mayor que 0 -.-");
    i=1;
 }   

}

alert("Te toca pagar: " + totalApagar);
console.log(totalApagar);

