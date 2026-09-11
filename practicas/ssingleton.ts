class ConfiguracionTienda {


  private static instancia: ConfiguracionTienda;


  private constructor() {}


  public static getInstancia(): ConfiguracionTienda {

    if (!ConfiguracionTienda.instancia) {
      ConfiguracionTienda.instancia = new ConfiguracionTienda();
    }

    return ConfiguracionTienda.instancia;
  }
}


const tienda1 = ConfiguracionTienda.getInstancia();
const tienda2 = ConfiguracionTienda.getInstancia();

console.log(tienda1 === tienda2); 