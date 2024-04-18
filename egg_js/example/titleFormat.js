
function titleFormat(titulo){
    if (titulo==="") {
        return "Entrada Invalidad"
    } else {
        const primeraLetra = titulo.charAt(0).toUpperCase();
        const restoLetras = titulo.slice(1).toLowerCase();
        //console.log(`esta es la primera letra ${primeraLetra}`)
        //console.log(`esto es el resto de letras ${restoLetras}`)
        const tituloConcatenado = primeraLetra + restoLetras;
        //console.log(`esto es el titulo concatenado ${tituloConcatenado}`)
        return tituloConcatenado
        

    }
}
console.log(titleFormat("HoLa MuNdo"));
console.log(titleFormat("hola Mundo"));
console.log(titleFormat("HOLA MUNDO"));