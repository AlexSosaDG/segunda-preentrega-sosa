
//funciones
function ingresarCantidad() {
    let numero = prompt("¿Cuantas empanadas quiere pedir?");
    let cantidadEmpanadas = numero * 300;
    
}

ingresarCantidad();

/*
 if (nombreComida !== "") {
        nombreComida += ", ";
    }

    nombreComida += listaRapida;

function elegirEmpanadas() {
    let relleno = prompt("Quiere empanadas de: 1-Pollo 2-Carne 3-Jamón y queso 0-Volver al menú anterior")

    while (relleno !== "0") {
        switch (relleno) {
            case "1":

                break;
            case "2":

                break;
            case "3":

                break;

        }

    }
}

function algoRapido() {

    let listaRapida = prompt("Quiere: 1-Sanguche de milanesa 2-Empanadas 0-Volver al inicio")

    while (listaRapida !== "0") {
        switch (listaRapida) {
            case "1":
                elegirEmpanadas(listaempanadas)
                break;

            case "2":
                concatenarComidasRapi(listaRapida);
                total += 300;
                break;

            default:
                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }
        listaRapida = prompt("¿Quiere agregar algo más? 1-Sanguche de milanesa 2-Empanadas 0-Volver al inicio");
    }
}

function algoElaborado() {
    let listaElaborada = prompt("Quiere: 1-Ravioles con Tuco 2-Pastel de Papa 3-Napolitana con guarnición 4-Tarta de jamón y queso 0-Volver al inicio");

    while (listaElaborada !== "0") {
        switch (listaElaborada) {
            case "1":
                concatenarComidasElaborada(listaElaborada);
                total += 1500;
                break;

            case "2":
                concatenarComidasElaborada(listaElaborada);
                total += 1500;
                break;

            case "3":
                concatenarComidasElaborada(listaElaborada);
                total += 2100;
                break;

            case "4":
                concatenarComidasElaborada(listaElaborada);
                total += 1300;
                break;

            default:
                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }
        listaElaborada = prompt("¿Quiere agregar algo más? 1-Ravioles con Tuco 2-Pastel de Papa 3-Napolitana con guarnición 4-Tarta de jamón y queso 0-Volver al inicio");
    }
}

function concatenarComidasRapi(listaRapida) {
    if (nombreComida !== "") {
        nombreComida += ", ";
    }

    nombreComida += listaRapida;
}

function concatenarComidasElaborada(listaElaborada) {
    if (nombreComida !== "") {
        nombreComida += ", ";
    }

    nombreComida += listaElaborada;
}
function totalDeLaCompra() {
    alert("Su pedido es: " + nombreComida + ". El total de su pedido es: $" + total);
}
//arrays

const aderezos = [
    "Mayonesa",
    "Savora",
    "Ketchup",
];



class ListaComidas {
    constructor(nombre, categoria, ingredientes, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ingredientes = ingredientes;
        this.precio = precio;


    }
}


const comidas = [
    new ListaComidas("Empanada de pollo", "Algo rápido", "Pollo y verduras", 300),
    new ListaComidas("Empanada de carne", "Algo rápido", "Carne y verduras", 300),
    new ListaComidas("Empanada de jamón y queso", "Algo rápido", "Jamón y queso", 300),
    new ListaComidas("Sanguche de pollo simple", "Algo rapido", "Aderezos", 1500),
    new ListaComidas("Sanguche de pollo clásico", "Algo rápido", "Lechuga y tomate - aderezos", 1600),
    new ListaComidas("Sanguche de pollo completo", "Algo rápido", "Lechuga, tomate, jamón, queso, huevo - aderezos", 1700),
    new ListaComidas("Sanguche de carne simple", "Algo rapido", "Aderezos", 1800),
    new ListaComidas("Sanguche de carne clásico", "Algo rápido", "Lechuga y tomate - aderezos", 1900),
    new ListaComidas("Sanguche de carne completo", "Algo rápido", "Lechuga, tomate, jamón, queso, huevo - aderezos", 2000),
    new ListaComidas("Tarta de jamón y queso", "Algo elaborado", "Jamón y queso", 1400),
    new ListaComidas("Ravioles con Tuco", "Algo elaborado", "Ravioles, carne, salsa, queso rallado, pan y cubiertos", 1700),
    new ListaComidas("Pastel de papa", "Algo elaborado", "",),
    new ListaComidas("Milanesa napolitana con guarnición", "Algo elaborado", "Milanesa, salsa, queso, jamón, tomate", 2200),
    new ListaComidas("Tortilla de papa", "Algo elaborado", "Papa, cebolla, jamón y queso", 1500),
]

comidas.forEach((el) => {
    const concatenarNombreYPrecio = el.nombre + " - $" + el.precio;
});








//INICIO DEL PROGRAMA

let nombreComida = "";
let total = 0;
let operacion = prompt("¿Que te gustaría comer hoy? Ingrese 1-si quiere algo rápido 2-si quiere algo elaborado 3-para ver el menú completo 4-si quiere cancelar el pedido");


//variables
*/
