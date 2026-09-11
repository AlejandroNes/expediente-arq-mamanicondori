class Venta {
  constructor(
    public cliente: string,
    public producto: string,
    public cantidad: number,
    public metodoPago: string
  ) {}
}

class VentaBuilder {
  private cliente = "";
  private producto = "";
  private cantidad = 0;
  private metodoPago = "";

  agregarCliente(cliente: string) {
    this.cliente = cliente;
    return this;
  }

  agregarProducto(producto: string) {
    this.producto = producto;
    return this;
  }

  agregarCantidad(cantidad: number) {
    this.cantidad = cantidad;
    return this;
  }

  agregarMetodoPago(metodoPago: string) {
    this.metodoPago = metodoPago;
    return this;
  }

  construir() {
    if (!this.cliente) {
      throw new Error("La venta necesita un cliente");
    }

    if (this.cantidad <= 0) {
      throw new Error("La cantidad debe ser mayor a 0");
    }

    return new Venta(
      this.cliente,
      this.producto,
      this.cantidad,
      this.metodoPago
    );
  }
}


// Ejemplo
const venta = new VentaBuilder()
  .agregarCliente("Alejandro")
  .agregarProducto("Samsung Galaxy S25")
  .agregarCantidad(1)
  .agregarMetodoPago("Efectivo")
  .construir();

console.log(venta);