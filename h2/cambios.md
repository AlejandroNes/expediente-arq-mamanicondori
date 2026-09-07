## Cambios realizados

En el nuevo diagrama separé `Usuario` en `Cliente`, `Vendedor` y `Administrador`, para que cada uno tenga solamente las acciones que le corresponden. Este cambio aplica **LSP**.

También agregué la interfaz `IRegistradorVenta`, para que la acción de registrar una venta esté separada y sea utilizada solamente por el Vendedor. Aquí apliqué **ISP**.

Agregué la interfaz `IGuardadoVenta`, para que `Venta` solo pida guardar la información sin tener que saber cómo se guarda. Este cambio aplica **DIP**.

También dejé a `Venta` encargada solamente de la información y el estado de una venta, evitando darle tareas que corresponden a otras partes del sistema. Aquí apliqué **SRP**.

Con estos cambios el diagrama queda más ordenado, porque cada clase y cada interfaz tiene una función clara y los usuarios solamente tienen las acciones que realmente necesitan.