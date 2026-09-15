
interface Observador {
  actualizar(mensaje: string): void;
}


class Vendedor implements Observador {
  actualizar(mensaje: string) {
    console.log("Vendedor:", mensaje);
  }
}


class Administrador implements Observador {
  actualizar(mensaje: string) {
    console.log("Administrador:", mensaje);
  }
}


class Producto {

  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public stock: number
  ) {}


  
  suscribir(observador: Observador) {
    this.observadores.push(observador);
  }


  
  cambiarStock(stock: number) {
    this.stock = stock;

    
    if (this.stock <= 3) {

      // Avisamos a todos
      for (const observador of this.observadores) {
        observador.actualizar(
          `${this.nombre} tiene poco stock`
        );
      }
    }
  }
}


// PRUEBA

const productoObserver = new Producto("Samsung S25", 10);

productoObserver.suscribir(new Vendedor());
productoObserver.suscribir(new Administrador());
productoObserver.cambiarStock(5);

export {};