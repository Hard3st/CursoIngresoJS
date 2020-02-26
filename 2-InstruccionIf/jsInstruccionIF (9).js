
function mostrar()
{
	var randomv;
	var maximo = 10;
	var minimo = 1;

	randomv = parseInt(Math.floor(Math.random() * (maximo + 1) - minimo) + minimo);

	alert(randomv);

}//FIN DE LA FUNCIÓN