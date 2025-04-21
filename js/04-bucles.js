//estructuras de repetición
//while - do-while - for

//While: mientras se cumple una condicion logica, hace tal cosa - while(condicion logica)
// {
// hace esto
//agregar una linea donde la condicion logica se deje de cumplir} 

let renglon = 1

while (renglon<= 50){document.writeln(`<p>Renglon numero ${renglon}</p>`)
    renglon = renglon + 1
}

/*
do-while
hacer - mientras se cumple la condicion logica

do{todas la lineas
agregar una linea que no cumpla la condicion
} while(condicion logica)

*/

let linea = 1

do{document.writeln(`<p> Linea numero: ${linea}`)
linea++;
} while(linea <= 50)