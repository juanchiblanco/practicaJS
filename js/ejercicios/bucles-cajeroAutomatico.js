let saldo = 10000

do{
    const opcion = parseInt(prompt('Seleccione una opcion: 1-Consultar saldo, 2-Depositar dinero, 3-Extraer dinero, 4-Salir'))

switch(opcion){
    case 1: document.writeln('El saldo es $' + saldo);
    console.log(`El saldo es $${saldo}`);
    break;

    case 2: 
    const deposito = parseFloat(prompt("Ingresa el monto a depositar"))
    saldo = saldo + deposito;
    document.writeln('Depositaste $ '+deposito+", tu saldo actual es $" + saldo);
    console.log(`Depositaste $${deposito}, tu saldo actual es $${saldo}`);
    break;

    case 3:
        const extraccion = parseFloat(prompt("Ingresa el monto a extraer"))
        if(extraccion<=saldo){
            saldo= saldo - extraccion
            document.writeln("Monto a extraer $"+extraccion+", tu saldo actual es $"+saldo)
        console.log(`Monto a extraer $${extraccion}, tu saldo actual es $${saldo}`);
        }else{document.writeln("No puedes extraer esa cantidad de dinero")};
        console.log(`No puedes extraer esa cantidad de dinero`);
        break;

    case 4:
        document.writeln(`Cerrando el sistema...`);
        console.log(`Cerrando el sistema...`);
        break;

        default:

        document.writeln(`Ingresaste una opcion invalida`)
        console.log(`Ingresaste una opcion invalida`)
}
}

while(confirm(`Deseas realizar otra opcion?`))
