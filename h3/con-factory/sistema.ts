class Producto {
  constructor(
    public nombre: string,
    public precio: number,
    public stock: number
  ) {}
}

class Cliente {
  constructor(public nombre: string) {}
}

class Venta {
  constructor(
    public cliente: Cliente,
    public producto: Producto,
    public cantidad: number
  ) {}
}

class Vendedor {
  registrarVenta(venta: Venta) {
    console.log(`Venta registrada para ${venta.cliente.nombre}`);
  }
}


// Se encarga de crear productos.

class ProductoFactory {

  static crearProducto(tipo: string): Producto {

    if (tipo === "Samsung") {
      return new Producto(
        "Samsung Galaxy S25",
        5000,
        10
      );
    }

    if (tipo === "Xiaomi") {
      return new Producto(
        "Xiaomi 15",
        3500,
        10
      );
    }

    throw new Error("Tipo de producto no válido");
  }
}


// EJEMPLO DEL PATRONFACTORY

const productoFactory =
  ProductoFactory.crearProducto("Samsung");

console.log(productoFactory);


export {};