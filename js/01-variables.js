//Esto es un comentario de una linea - ES6 - 2015

/*Esto es un comentario de multiples lineas*/

console.log("hola mundo");

document.writeln("<p>Hola Mundo</p>")
document.writeln("Hola Mundo")

//Ventana emergente

//alert("Hola Alert")

//como declarar una variable (let - const - var)

let actualYear
//inicializar una variable
actualYear = 2025

document.writeln("<br>El año actual es: ", actualYear)

const url = "http://127.0.0.1:5500/index.html"

document.writeln("<br>La direccion de live server es: " + url)

//ejemplo de suma de numeros

let numero1, numero2, resultado;
numero1 = parseInt(prompt("ingrese un numero"))
numero2 = parseInt(prompt("ingrese un numero"))

console.log(numero1)
console.log(numero2)

document.writeln("<br> El resultado de la suma es: ", resultado = numero1 + numero2)

//Tipos de datos primitivos
//string (texto)
const nombreUsuario = "Juan Manuel Blanco"
const producto = 'Celular'
const tarea = `Realizar el tp 1`
//number
const edad = 30;
const precio = 35.6;
const precioNegativo = -20.5;
//booleanos

const encendido = true
const lavado = false

//null: es un valor vacio
let vacio = null;

//undefined

let datoNuevo;

console.log(nombreUsuario)
console.log(producto)
console.log(tarea)
console.log(edad)
console.log(precio)
console.log(precioNegativo)
console.log(encendido)
console.log(lavado)
console.log(vacio)
console.log(datoNuevo)

//Tipos de datos referenciales

//objeto con notacion literal
const funko = {
    nombre: "Ironman",
    precio: 30,
    codigo: "ID540"
}

console.log(nombreUsuario)
console.log(producto)
console.log(tarea)
console.log(edad)
console.log(precio)
console.log(precioNegativo)
console.log(encendido)
console.log(lavado)
console.log(vacio)
console.log(datoNuevo)
console.log(funko)

//arrays

const productos = ["celular", "tablet", "notebook"]

console.log(nombreUsuario)
console.log(producto)
console.log(tarea)
console.log(edad)
console.log(precio)
console.log(precioNegativo)
console.log(encendido)
console.log(lavado)
console.log(vacio)
console.log(datoNuevo)
console.log(funko)
console.log(productos)