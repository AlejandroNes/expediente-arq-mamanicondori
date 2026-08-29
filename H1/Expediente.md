# Ecommerce

## Sistema: Tienda online de celulares

**Nombre:** Nestor Alejandro Mamani Condori
**Variante:** 4 — Comercio


Mi sistema corresponde a la variante Comercio porque es una tienda que vende celulares y necesita controlar las ventas y el stock de sus productos.

# 1. Actores

### Cliente

* Consulta los celulares disponibles.
* Busca celulares.
* Realiza compras.
* Consulta sus pedidos.

### Vendedor

* Registra las ventas.
* Consulta los celulares disponibles.
* Consulta el stock.

### Administrador

* Registra y modifica celulares.
* Modifica precios.
* Controla el stock.
* Consulta las ventas.
* Recibe avisos cuando queda poco stock.


# 2. Módulos

| Módulo                | Responsabilidad                                      |
| --------------------- | ---------------------------------------------------- |
| **Productos**         | Registrar y administrar los celulares.               |
| **Inventario**        | Controlar la cantidad de celulares disponibles.      |
| **Ventas**            | Registrar las compras y sus estados.                 |
| **Usuarios**          | Gestionar clientes, vendedores y administradores.    |
| **Reportes y avisos** | Mostrar las ventas y avisar cuando queda poco stock. |


# 3. Primer diagrama de clases

El sistema tendrá cinco clases principales:

* Producto
* Categoría
* Venta
* DetalleVenta
* Usuario

(diagrama en la imagen diagrama)

# 4. Estados de la venta

La venta tendrá los siguientes estados:

**Carrito → Confirmada → Pagada → Entregada**

También puede ser anulada:

**Confirmada → Anulada**


# 5. Atributos de calidad

## Idoneidad funcional

El sistema debe controlar correctamente el stock de los celulares. Cuando se realiza una venta, el stock debe disminuir y no se debe vender un celular que no esté disponible.

## Usabilidad

El sistema debe ser sencillo y rápido de utilizar. El vendedor debe poder buscar un celular, revisar su stock y registrar una venta fácilmente.



El sistema permitirá vender celulares por internet, controlar los productos disponibles y registrar las ventas.

La idea principal es:

**Cliente compra → se registra la venta → disminuye el stock.**
