//SINGLETON

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


// SINGLETON
// Permite tener una sola configuracion

class ConfiguracionTienda {

  private static instancia:
    ConfiguracionTienda;

  // Evita usar:
  // new ConfiguracionTienda()
  private constructor() {}


  static getInstancia():
    ConfiguracionTienda {

    // Si todavía no existe la crea
    if (!ConfiguracionTienda.instancia) {

      ConfiguracionTienda.instancia =
        new ConfiguracionTienda();
    }

    // Devuelve siempre la misma
    return ConfiguracionTienda.instancia;
  }
}


// EJEMPLO DEL SINGLETON

const configuracionSingleton1 =
  ConfiguracionTienda.getInstancia();

const configuracionSingleton2 =
  ConfiguracionTienda.getInstancia();



console.log(configuracionSingleton1 === configuracionSingleton2 );

export {};