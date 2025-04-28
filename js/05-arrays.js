//Declarar un array vacio

const paises = []

//Declarar un array con datos

const comidas = [`🍔`,2,true,`pizza`];

function listarComidas(titulo){
    document.writeln(`<h3>${titulo}</h3>`)

    document.writeln(`<ul>`)
for(let i=0; i<comidas.length; i++){
    document.writeln(`<li>${comidas[i]}</li>`)}
document.writeln(`</ul>`)
}

//mostrar el array conosola

console.log(paises)
console.log(comidas)

//mostrar array en html

document.writeln(paises+`<br>`)
document.writeln(comidas)
document.writeln(`<br>Cantidad de elementos en el array: ${comidas.length}`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

listarComidas(`Mostrar el array de comidas`)

//Agregar elementos al array

// document.writeln("<h3>Agregar un elemento al principio del array</h3>")

comidas.unshift(`🍟`,`🌭`)

listarComidas(`Agregar un elemento al principio del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

// document.writeln("<h3>Agregar un elemento al final del array</h3>")

comidas.push(`🧀`,`🥖`)

listarComidas(`Agregar un elemento al final del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

// document.writeln("<h3>Agregar un elemento en el medio del array</h3>")

comidas.splice(3,0,`🍝`)

listarComidas(`Agregar un elemento en el medio del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

// document.writeln("<h3>Borrar un elemento al principio del array</h3>")

comidas.shift()

listarComidas(`Borrar un elemento al principio del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

// document.writeln("<h3>Borrar el ultimo elemento del array</h3>")

comidas.pop()

listarComidas(`Borrar el ultimo elemento del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

// document.writeln("<h3>Borrar un elemento en el medio del array</h3>")

comidas.splice(3,1)

listarComidas(`Borrar un elemento en el medio del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)

/*document.writeln("<h3>Borrar mas de un elemento del array</h3>")

comidas.splice(3,2)

document.writeln(`<ul>`)
for(let i=0; i<comidas.length; i++){
    document.writeln(`<li>${comidas[i]}</li>`)}
document.writeln(`</ul>`)

document.writeln("<h3>Borrar desde un elemento hasta el final del array</h3>")

comidas.splice(2)

document.writeln(`<ul>`)
for(let i=0; i<comidas.length; i++){
    document.writeln(`<li>${comidas[i]}</li>`)}
document.writeln(`</ul>`)*/

// document.writeln("<h3>Modificar un elemento del array</h3>")

comidas[4] = `🍪`

listarComidas(`Modificar un elemento del array`)

// document.writeln(`<ul>`)
// for(let i=0; i<comidas.length; i++){
//     document.writeln(`<li>${comidas[i]}</li>`)}
// document.writeln(`</ul>`)