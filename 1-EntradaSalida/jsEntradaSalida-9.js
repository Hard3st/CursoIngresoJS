/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

var num1, res1, res2;

function mostrarAumento()
{

    num1 = parseInt(document.getElementById("sueldo").value);
    
    res1 = num1 * 0.10;
    res2 = num1 + res1;

    document.getElementById("resultado").value = res2;

    
}
