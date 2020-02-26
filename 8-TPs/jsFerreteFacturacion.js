/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var num1;
var num2;
var num3;
var suma;
var prom;
var iva;
var total;

function Sumar () 
{
    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;
    alert("La suma total de estos productos es: "+suma);

}
function Promedio () 
{
    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;
    prom = suma / 3;
    alert("El promedio total de estos productos es: "+prom);
	
}
function PrecioFinal () 
{
    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;
    iva = suma * 0.21;
    total = suma + iva;
    alert("La suma total de los productos con el 21% de IVA es: "+total);
}