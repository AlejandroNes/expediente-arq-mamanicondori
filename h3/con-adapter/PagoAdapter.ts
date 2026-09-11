

// Así quiero manejar los pagos dentro de mi sistema de la pasarela de apgaos
interface Pago {
  pagar(monto: number): void;
}



class PasarelaExterna {
  procesarPago(total: number) {
    console.log(`Pago externo procesado: Bs. ${total}`);
  }
}


// ADAPTER
// Traduce lo que pide mi tienda a lo que entiende la pasarela externa

class PagoAdapter implements Pago {
  private pasarela = new PasarelaExterna();
  pagar(monto: number): void {

    this.pasarela.procesarPago(monto);
  }
}

const pago: Pago = new PagoAdapter();

pago.pagar(3500);