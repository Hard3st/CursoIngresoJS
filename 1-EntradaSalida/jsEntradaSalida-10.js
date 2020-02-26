/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

var num1, res1, res2;

function mostrarAumento()
{
    num1 = parseInt(document.getElementById("importe").value);
    
    res1 = num1 * 0.25;
    res2 = num1 - res1;

    document.getElementById("resultado").value = res2;
}
