//objeto en javascript

const estudiante = {
    nombre: "Mica",
    apellido: "Reyna",
    colorfavorito: "marrón",
    animal: "gato"
}
const nombreEstudiante = estudiante.nombre

//nombre: nombrepiola es un cambio para cuando se vuelve a llamar a la variable, 
//se llama nombrepiola en vez de nombre, pero sigue siendo el mismo valor
const { nombre: nombrepiola, apellido, colorfavorito, animal } = estudiante
//llama al final a lo que se le asignó a nombrepiola, apellido y animal, que son los mismos valores 
//que nombre, apellido y animal del objeto estudiante
console.log(nombrepiola, apellido, animal)



const frutas = ["manzanas", "peras", "ananas", "mandarina"]
const [manzana, , mandarina] = frutas
console.log(manzana, mandarina)

//desestructuración de objetos y arrays

const frutas = ["manzanas", "peras", "ananas", "mandarina"]

//desestructuración de arrays, se asigna a manzana el valor del primer elemento del array, a mandarina el valor del tercer elemento del array, y se omite el segundo elemento del array


const frutas = ["manzanas", "peras", "ananas", "mandarina"]
const [manzana, , mandarina] = frutas
//spread operator 
const nuevo = ["anana", ...frutas, "granadas"]
console.log(nuevo)

const estudiante = { nombre: "pepe", apellido: "lopez" }
const estudianteNuevo = { ...estudiante, edad: 25 }
console.log(estudianteNuevo)





const inventario = [
    { id: 1, nombre: "Pro Plan Adulto", precio: 100, categoria: "Alimentos" },
    { id: 2, nombre: "Rascador para gatos", precio: 50, categoria: "Accesorios" },
    { id: 3, nombre: "Royal Dog", precio: 120, categoria: "Alimentos" },
    { id: 4, nombre: "Correa extensible", precio: 30, categoria: "Accesorios" }
];

// 4. Iterar y mutar con Map
const inventarioConDescuento = inventario.map(producto => {

    // 2. Destructuring: Extraemos las propiedades que necesitamos
    const { nombre, precio, categoria } = producto;

    // 5. Condicionales: Aplicar descuento solo a "Alimentos"
    if (categoria === "Alimentos") {
        return {
            // 1. Spread Operator: Copiamos todas las propiedades originales
            ...producto,
            // Mutamos el precio con el descuento
            precio: precio * 0.85,
            oferta: true
        };
    }

    // Si no es alimento, devolvemos una copia exacta usando spread
    return { ...producto, oferta: false };
});

// 6. Mostrar en consola y en el DOM
console.log("Inventario Original:", inventario);
console.log("Inventario con Ofertas:", inventarioConDescuento);

// Ejemplo rápido para mostrarlo en el HTML (suponiendo que tienes un div con id="app")
const app = document.getElementById("app");
if (app) {
    inventarioConDescuento.forEach(p => {
        const item = document.createElement("p");
        item.textContent = `${p.nombre} - Precio: $${p.precio.toFixed(2)} ${p.oferta ? '¡OFERTA!' : ''}`;
        app.appendChild(item);
    });
}







Crear un script con js con las siguientes requisitos
1 - Utilizar spread operator
2 - Utilizar un destructuring
3 - utilizar una lista de objetos
4 - iterar la lista y mutarlos con Map
5 - Utilizar condicionales
6 - Mostrarlos por consola o en el DOM





//Lista
const productos = [
    { nombre: 'Manzana', precio: 10 },
    { nombre: 'Pera', precio: 25 },
    { nombre: 'Mango', precio: 30 }
];

//Map
const productosFinales = productos.map(item => {

    // Destructuring
    const { precio, nombre } = item;
    console.log(precio, nombre)

    //Condicional
    let nuevoPrecio = precio;
    if (precio > 20) {
        nuevoPrecio = precio - 5;
    } //hace un descuentito

    //Spread operator
    return {
        ...item,
        precio: nuevoPrecio,
        oferta: precio > 20
    };
});

console.log(productosFinales);
