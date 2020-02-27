function mostrar()
{
    var precio;
    var descuento;
    var descuentoA;
    var preciofinal;

    precio = parseInt(prompt("Ingrese el precio del producto: "));
    descuento = parseInt(prompt("Ingrese el descuento del mismo: "));

    descuentoA = precio * (descuento / 100);
    preciofinal = precio - descuentoA;

    document.getElementById("elPrecioFinal").value = preciofinal;

}
