// Refactor: Nestor Alejandro Mamani Condori
// Corrección 1 se separola interfaz grande en varias interfaces pequeñas.

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
