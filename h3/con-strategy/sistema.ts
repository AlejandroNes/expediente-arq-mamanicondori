
// PATRÓN STRATEGY

interface EstrategiaDescuento {
  calcular(precio: number): number;
}


// ESTRATEGIA 1
class DescuentoNormal implements EstrategiaDescuento {

  calcular(precio: number): number {
    return precio;
  }
}


// ESTRATEGIA 2
class DescuentoFrecuente implements EstrategiaDescuento {

  calcular(precio: number): number {
    return precio * 0.90;
  }
}


// VENTA
class Venta {

  constructor(
    public total: number,
    private estrategia: EstrategiaDescuento
  ) {}


  
  calcularTotal(): number {
    return this.estrategia.calcular(this.total);
  }
}


// Venta normal
const ventaNormal = new Venta(5000, new DescuentoNormal());
console.log("Cliente normal:",ventaNormal.calcularTotal());


// Venta con descuento
const ventaFrecuente = new Venta(5000, new DescuentoFrecuente());
console.log("Cliente frecuente:", ventaFrecuente.calcularTotal());


export {};