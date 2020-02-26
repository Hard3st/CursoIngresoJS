function mostrar()
{

	var i = 0;
	var ac = 0;
	var ac1 = 0;

	while(i < 5){

	ac = parseInt(prompt("Ingrese el nùmero "));
	ac1 = ac1 + ac;
	i++;

	}

	document.getElementById('suma').value = ac1;
	document.getElementById('promedio').value = ac1 / 5;

}//FIN DE LA FUNCIÓN