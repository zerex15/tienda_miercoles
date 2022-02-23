// // entradas del problema (comentario de linea)

// /*
//  comentario de bloque
// */
// let nombreProducto="camara sony"
// let precioProducto = 3500000
// let pesoProducto = 300
// let tieneDescuento = true
// let descripcionProducto = "sony alpha 7"
// let teleofonoVendedor = "31367097964"

// const NOMBRE_CIELNTE = "pepito pérez"


// //arreglos unidimencionales (vectores)
// // sirven para almacenar varios elementos en 1 sola variable

// let productos= ["camara", "tripode", "flash", "memorias"]
// let productos2 = Array("camara", "tripode", "flash", "memorias")





// //salidas

// console.log ("buenas")
// console.log(tieneDescuento)
// console.log ("su nombre es: " + NOMBRE_CIELNTE + "y su producto es " + descripcionProducto)
// // `` alt 96 o alt gr }
// console.log(`su nombre es: ${NOMBRE_CIELNTE} y su producto es: ${nombreProducto}`)
// console.log("*******")
// console.log (productos)
// console.log(productos2[0])

 /* //controlando etiquetas
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)


//controlando el menú
let etiquetaMenu = document.getElementById("navbar")
etiquetaMenu.textContent="Zerex_photo"

//controlando una imagen
let etiquetaFoto = document.getElementById("fotoFondo")
etiquetaFoto.src="img/descarga.jpg"

//cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
*/

//TIENDA

let productosNombre=["lente sigma", "camara leica"]
let productosPrecio = [4000, 15000]
let productoDescripcion =["lente sigma 35mm", "camara tipo vintage leica"]
let productosPromocion =[true, false]
let nombres = Array("lente sigma", "camara leica")

console.log(productosNombre[0])
console.log(nombres[0])

//creando objetos con JS
let usuario ={
    nombre : "el papi riquis",
    edad: 48,
    amigos:["no tengo", "no tengo2", "no tengo 3"]
}
console.log(usuario)
//imprimir un solo atributo
console.log(usuario.amigos[1])
