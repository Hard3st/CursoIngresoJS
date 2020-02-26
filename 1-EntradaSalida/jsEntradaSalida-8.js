/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

var num1, num2, res;

function SacarResto()
{

	num1 = parseInt(document.getElementById("numeroDividiendo").value);
    num2 = parseInt(document.getElementById("numeroDivisor").value);

    res = num1 % num2;
    alert("El resto es: "+res);

}
