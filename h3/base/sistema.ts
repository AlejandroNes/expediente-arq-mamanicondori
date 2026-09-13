// BASE DEL SISTEMA 

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


// EJEMPLO DE USO

const clienteBase = new Cliente("Alejandro");

const productoBase = new Producto(
  "Samsung Galaxy S25",
  5000,
  10
);

const ventaBase = new Venta(
  clienteBase,
  productoBase,
  1
);

const vendedorBase = new Vendedor();

vendedorBase.registrarVenta(ventaBase);

export {};