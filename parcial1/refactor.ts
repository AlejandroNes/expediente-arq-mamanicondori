// Refactor: Nestor Alejandro Mamani Condori
// Corrección 1 se separo la interfaz grande en varias interfaces pequeñas.

interface IRegistroDePedidos {
  RegistrarPedido(material: string, cantidad: number): void;
}

interface IAutorizadorVentaMayorista {
  AutorizarVentaAlPorMayor(material: string): void;
}

interface IAjusteDePrecios {
  AjustarPrecio(material: string, nuevoPrecio: number): void;
}

interface IReporteDeCompras {
  VerReporteDeCompras(): void;
}

class Encargado implements
  IRegistroDePedidos,
  IAutorizadorVentaMayorista,
  IAjusteDePrecios,
  IReporteDeCompras {
  RegistrarPedido(material: string, cantidad: number): void {
    console.log(`[ENC] Pedido: ${cantidad} x ${material}`);
  }

  AutorizarVentaAlPorMayor(material: string): void {
    console.log(`[ENC] Venta al por mayor de ${material} autorizada`);
  }

  AjustarPrecio(material: string, nuevoPrecio: number): void {
    console.log(`[ENC] ${material} ahora cuesta ${nuevoPrecio.toFixed(2)} Bs`);
  }

  VerReporteDeCompras(): void {
    console.log("[ENC] Reporte de compras del mes");
  }
}

class Vendedor implements IRegistroDePedidos {
  RegistrarPedido(material: string, cantidad: number): void {
    console.log(`[VEND] Pedido: ${cantidad} x ${material}`);
  }
}

// Corrección 2 el gestor recibe contratos en vez de crear clases concretas.

interface IRepositorioPedidos {
  GuardarPedido(
    cliente: string,
    material: string,
    cantidad: number,
    total: number
  ): void;
}

interface INotificadorPedidos {
  Enviar(mensaje: string): void;
}

class BaseDeDatosMySql implements IRepositorioPedidos {
  GuardarPedido(
    cliente: string,
    material: string,
    cantidad: number,
    total: number
  ): void {
    console.log(
      `[MYSQL] INSERT INTO pedidos VALUES ('${cliente}', '${material}', ${cantidad}, ${total})`
    );
  }
}

class CorreoSmtp implements INotificadorPedidos {
  Enviar(mensaje: string): void {
    console.log(`[SMTP] ${mensaje}`);
  }
}

class GestorDePedidos {
  constructor(
    private repositorio: IRepositorioPedidos,
    private notificador: INotificadorPedidos
  ) {}

  ProcesarPedido(
    cliente: string,
    tipoCliente: string,
    material: string,
    cantidad: number,
    precioUnitario: number
  ): void {
    const total = cantidad * precioUnitario;
    let descuento = 0;

    switch (tipoCliente) {
      case "contratista":
        descuento = total * 0.15;
        break;
      case "constructora":
        descuento = total * 0.25;
        break;
    }

    const totalFinal = total - descuento;

    this.repositorio.GuardarPedido(cliente, material, cantidad, totalFinal);

    console.log("----- COMPROBANTE -----");
    console.log(`${cantidad} x ${material}`);
    console.log(`Cliente: ${cliente} (${tipoCliente})`);
    console.log(`TOTAL: ${totalFinal.toFixed(2)} Bs`);

    this.notificador.Enviar(
      `Su pedido de ${material} fue registrado, ${cliente}`
    );
  }
}

class Demo {
  static Correr(): void {
    const repositorio = new BaseDeDatosMySql();
    const notificador = new CorreoSmtp();
    const gestor = new GestorDePedidos(repositorio, notificador);

    gestor.ProcesarPedido(
      "Marco",
      "contratista",
      "Cemento 50kg",
      10,
      62.0
    );
  }
}