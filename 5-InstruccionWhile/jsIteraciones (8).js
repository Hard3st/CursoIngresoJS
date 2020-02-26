function mostrar()
{

	var i = 0;
	var cant1;
	var cant2;
	var ac;
	var ac1 = 0;
	var ac2 = 1;

	cant1 = parseInt(prompt("¿Cuàntos nùmeros totales desea ingresar? :"));
	cant2 = parseInt(prompt("¿Cuàntos de ellos son negativos? :"));
	cant1 = cant1 - cant2;

	while(i < cant1){
		ac = parseInt(prompt("Ingrese los numeros positivos :"));
		ac1 = ac1 + ac;
		i++;
	}
	i = 0;
	ac = 0;
	while(i < cant2){
		ac = parseInt(prompt("Ingrese los numeros negativos :"));
		ac2 = ac2 * ac;
		i++;
	}


document.getElementById('suma').value=ac1;
document.getElementById('producto').value=ac2;

}//FIN DE LA FUNCIÓN