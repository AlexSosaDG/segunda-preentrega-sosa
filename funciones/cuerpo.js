//funciones
function verPedidoFinal(){
    for(const el of pedidoFinal){
        pedidoFinal.push(el)
        console.log(pedidoFinal);
    }
}
function tiempoDeEspera() {
    let minutos = Math.max(); 
};

function opcionesCarta(){
    let elegirDeLaCarta = prompt("Elija que quiere pedir: 1-Sanguches, 2-Empanadas, 3-Milanesa al plato con guarnición, 4-A la plancha con guarnición, 5-Tortilla de papa, 6-Tarta, 0-Salir");
    while(elegirDeLaCarta !== "0"){
        switch (elegirDeLaCarta) {
            case "1":
                
            break;
            case "2":

            break;
            case "3":
                
            break;
            case "4":

            break;
            case "5":

            break;
            case "6":
                
            break;
            default:
            alert("INGRESASTE UNA OPCIÓN INCORRECTA");
            break;

    }
}
}


//arrays

const cartaCompleta = [
    "Sanguches",
    "Empanadas",
    "Milanesa al plato con guarnición",
    "A la plancha con guarnición",
    "Tortilla de papa",
    "Tartas",
];
const tipoSanguche = [
    "Pollo",
    "Carne",
    "Churrasco",
    "Suprema de pollo",
];
const aderezos =[
    "Mayonesa",
    "Ketchup",
    "Mostaza",
];
const empanadas = [
    "Pollo",
    "Carne",
    "Jamón y queso",
];
const tipoDeTortillas = [
    "Simple",
    "Rellena",
]
const milaAlPlato = [
    "simple",
    "Clásica",
    "Napolitana",
];
const guarniciones = [
    "Papas fritas",
    "Puré de papa",
    "Ensalada",
    "Arroz con queso",
];
const aLaPlancha = [
    "Suprema de pollo",
    "Churrasco",
    "Bife",
];

const pedidoFinal = [ ];



class Comidas {
    constructor(nombre, categoria, ingredientes, precio, tiempoDeCoccion) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.tiempoDeCoccion = tiempoDeCoccion;
    }
}

const comidas = [
    new Comidas("Sanguche de pollo simple", "sanguches", "Aderezos", 1500),
    new Comidas("Sanguche de pollo clásico", "sanguches", "Lechuga y tomate - aderezos", 1600, 7),
    new Comidas("Sanguche de pollo completo", "sanguches", "Lechuga, tomate, jamón, queso, huevo - aderezos", 1700, 7),
    new Comidas("Sanguche de carne simple", "sanguches", "Aderezos", 1800, 7),
    new Comidas("Sanguche de carne clásico", "sanguches", "Lechuga y tomate - aderezos", 1900, 7),
    new Comidas("Sanguche de carne completo", "sanguches", "Lechuga, tomate, jamón, queso, huevo - aderezos", 2000, 7),
    new Comidas("Tarta de jamón y queso", "Tartas", "Jamón y queso", 1400, 30),
    new Comidas("Tarta de pollo", "Tartas", "Pollo y huevo", 1400, 30),
    new Comidas("Ravioles con Tuco", "Plato del día", "Ravioles, carne, salsa, queso rallado y pan", 1700, 60),
    new Comidas("Pastel de papa", "Plato del día", "Puré de papa, carne, huevo, queso, pan", 1500, 60),
    new Comidas("Milanesa simple con guarnición", "Milanesas al plato", "Milanesa", 2200, 20),
    new Comidas("Milanesa Clásica con guarnición", "Milanesas al plato", "Milanesa, salsa y queso", 2200, 20),
    new Comidas("Milanesa napolitana con guarnición", "Milanesas al plato", "Milanesa, salsa, queso, jamón, tomate", 2200, 20),
    new Comidas("Tortilla de papa", "Tortillas", "Papa, huevo, cebolla, jamón y queso", 1500, 20),
    new Comidas("Tortilla de papa rellena", "Tortillas", "Papa, huevo, cebolla, jamón y queso", 1500, 20),
    new Comidas("Tortilla de papa", "Tortillas", "Papa y huevo", 1500, 20),
];

let nombreComida = "";
let total = 0;
let tiempo = 0;
let operacion = prompt("Buenas! ¿Que te gustaría comer hoy? Ingrese: 1-si quiere ver la carta, 2-si quiere buscar por palabra clave, 0-si quiere salir");

while (operacion !== "0") {
    switch (operacion) {

        case "1":
            for (const carta of cartaCompleta); 
            console.log(cartaCompleta);
            opcionesCarta();
            break;

        case "2":
            filte
            break;

        default:
            alert("INGRESASTE UNA OPCIÓN INCORRECTA");
            break;
    }

    //VOLVER A PEDIR UNA OPCIÓN AL USUARIO
    operacion = prompt("¿Que te gustaría comer hoy? Ingrese 1-si quiere algo rápido 2-si quiere algo elaborado 3-si quiere saber el total de su cuenta  0-si quiere finalizar el pedido");
}

alert("Gracias por visitarnos!");

