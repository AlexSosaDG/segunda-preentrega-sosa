//funciones

//arrays

class ListaComidas {
    constructor(nombre, categoria, ingredientes, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const sanguches = [
    new ListaComidas("Sanguche de pollo simple", "sanguches", "Aderezos", 1500),
    new ListaComidas("Sanguche de pollo clásico", "sanguches", "Lechuga y tomate - aderezos", 1600),
    new ListaComidas("Sanguche de pollo completo", "sanguches", "Lechuga, tomate, jamón, queso, huevo - aderezos", 1700),
    new ListaComidas("Sanguche de carne simple", "sanguches", "Aderezos", 1800),
    new ListaComidas("Sanguche de carne clásico", "sanguches", "Lechuga y tomate - aderezos", 1900),
    new ListaComidas("Sanguche de carne completo", "sanguches", "Lechuga, tomate, jamón, queso, huevo - aderezos", 2000),
]

