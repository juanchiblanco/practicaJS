//Bloque de codigo que puedo reutilizar

// Sintaxis: funcion tradicional, expresion de funcion, arrow fuctions

// Funciones sin parametros

function saludar(){
    //Todas las lineas necesarias para saludar
    document.writeln(`<p>Hola Mundo</p>`)
}

//Funciones con parametros

function sumar(numero1,numero2){
    const resultado = numero1+numero2
    document.writeln(`<p>Resultado de la suma: ${resultado}</p>`)
}

//Funciones que retornan un valor

//Invocar una funcion
saludar();

const  num1 = parseInt(prompt(`Ingresa el primer numero`))
const  num2 = parseInt(prompt(`Ingresa el segundo numero`))

sumar(num1,num2)
sumar(num1,5)