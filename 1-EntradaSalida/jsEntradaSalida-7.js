/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var num1, num2, res;

function sumar()
{	
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    res = num1 + num2;
    alert("El resultado de la suma es: "+res);
}

function restar()
{
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    res = num1 - num2;
    alert("El resultado de la resta es: "+res);
}

function multiplicar()
{ 
	num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    res = num1 * num2;
    alert("El resultado de la multiplicaciòn es: "+res);

}

function dividir()
{
	num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    res = num1 / num2;
    alert("El resultado de la divisiòn es: "+res);

}

