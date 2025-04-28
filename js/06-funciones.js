//Bloque de codigo que puedo reutilizar

// Sintaxis: funcion tradicional, expresion de funcion, arrow fuctions

// Funciones sin parametros

// function saludar(){
//     //Todas las lineas necesarias para saludar
//     document.writeln(`<p>Hola Mundo</p>`)
// }

//Expresion de funcion
const saludar = function(){
    document.writeln(`<p>Hola Mundo</p>`)
}

//Funciones con parametros

function sumar(numero1,numero2){
    const resultado = numero1+numero2
    document.writeln(`<p>Resultado de la suma: ${resultado}</p>`)
}

//Funciones que retornan un valor

// function multiplicar(numero1,numero2){
//     const resultado = numero1*numero2
//     return resultado
// }

const multiplicar = (numero1,numero2)=>{
        const resultado = numero1*numero2
        return resultado
    }

//Invocar una funcion
saludar();

const  num1 = parseInt(prompt(`Ingresa el primer numero`))
const  num2 = parseInt(prompt(`Ingresa el segundo numero`))

sumar(num1,num2)
sumar(num1,5)

const resultado = multiplicar(num1,num2)

document.writeln(`<p>Resultado de la multiplicacion: ${resultado}</p>`)