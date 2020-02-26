function mostrar()
{

	var seguir;
	var i = 0;
	var ac = 0;
	var ac1 = 0;

	do{
		ac = parseInt(prompt("Ingrese un nùmero"));
		ac1 = ac1 + ac;
		seguir = prompt("Desea continuar agregando nùmeros? ");
		i++;
	}while(seguir == "si");

	document.getElementById('suma').value = ac1;
	document.getElementById('promedio').value = ac1 / i;


}//FIN DE LA FUNCIÓN