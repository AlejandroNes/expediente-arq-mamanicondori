# Parcial 1 — Detecciones SOLID

**Variante:** B — Ferretería El Tornillo  
**Estudiante:** Nestor Alejandro Mamani Condori

## Principio violado
I — Segregación de interfaces (con una señal relacionada con L)
## Donde vive
IEmpleadoDeFerreteria y Vendedor
## Por que es una violacion
La interfaz obliga a todo empleado a tener permisos que no necesariamente necesita. Por eso Vendedor debe implementar metodos que no puede realizar y termina lanzando NotSupportedException.

##############################

## Principio violado
O — Abierto/Cerrado
## Donde vive
GestorDePedidos.ProcesarPedido, en el switch de tipoCliente
## Por que es una violacion
Cada nuevo tipo de cliente obliga a modificar el método existente y agregar otro case

#############################

## Principio violado
S — Responsabilidad unica
## Donde vive
GestorDePedidos.ProcesarPedido
## Por que es una violacion
El método calcula descuentos, guarda el pedido, imprime el comprobante y envía el correo. Tiene varias razones diferentes para cambiar.

#############################

## Principio violado
D — Inversión de dependencias
## Donde vive
GestorDePedidos.ProcesarPedido, en new BaseDeDatosMySql() y new CorreoSmtp()
## Por que es una violacion
La clase de alto nivel crea y conoce directamente las tecnologías concretas. Esto dificulta cambiar MySQL o SMTP.

#############################

## Curas realizadas

Del refactor.cs se corrigieron estas dos violaciones pero trabajando con typescript porque no entiendo bien este lenguaje:

I: se dividió IEmpleadoDeFerreteria en interfaces pequeñas según cada capacidad.

D: GestorDePedidos ahora recibe contratos por el constructor y ya no crea directamente la base de datos ni el correo.

Las violaciones O y S se dejan identificadas pero no se modifican porque la consigna solicita curar solamente dos.