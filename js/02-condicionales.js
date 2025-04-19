//Estructura de decision

/*
condicional simple
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}

condicional doble
if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else{
    todas las lineas de codigo que quiero ejecutar si no se cumple la condicion
}

if(condicion logica){
    todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}else-if(condicion logica 2){
    todas las líneas de código que quiero ejecutar si no se cumple la condición
}
*/

// let edad = parseInt(prompt("Ingresa tu edad"));
// if (edad >= 18){
//     document.writeln("Sos mayor de edad")
// }else{document.writeln("No sos mayor de edad")}

//Cree un programa que indica si el usuario puede votar o no

const edad = parseInt(prompt("Ingresa tu edad"));
if (edad >= 18 && edad <= 75) {document.writeln("Estas obligado a votar")}
else if(edad === 16 || edad === 17 || edad > 75){document.writeln('Tu voto es opcional')}
else{document.writeln('No puedes votar')}
