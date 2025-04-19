// opcion = 'sabado'
// switch(opcion){
// case 'lunes': todas las lineas y despues break;
// case 'martes': todas las lineas y despues break;
//  }

//Ejercicio cajero automatico

//Pedir al usuario que ingrse una opcion 1-consultar saldo, 2-depositar dinero. 3-extraer dinero, 4-salir

const opcion = parseInt(prompt('Seleccione una opcion: 1-Consultar saldo, 2-Depositar dinero, 3-Extraer dinero, 4-Salir'))
let saldo = 10000

switch(opcion){
    case 1: document.writeln('El saldo es $' + saldo);
    break;

    case 2: 
    const deposito = parseFloat(prompt("Ingresa el monto a depositar"))
    saldo = saldo + deposito;
    document.writeln('Depositaste $ '+deposito+", tu saldo actual es $" + saldo);
    break;

    case 3:
        const extraccion = parseFloat(prompt("Ingresa el monto a extraer"))
        if(extraccion<=saldo){
            saldo= saldo - extraccion
            document.writeln("Monto a extraer $"+extraccion+", tu saldo actual es $"+saldo)
        }else{document.writeln("No puedes extraer esa cantidad de dinero")};
        break;

    case 4:
        document.writeln(`Cerrando el sistema...`);
        break;

        default:

        document.writeln(`Ingresaste una opcion invalida`)
}