function mostrar()
{
var num;

num = parseInt(prompt("Ingrese el número: "));

while(!(num >= 0 && num <= 9)) {

	num = parseInt(prompt("Error, Ingrese un numero entre 0 y 9:"));
}

	document.getElementById("Numero").value = num;

}//FIN DE LA FUNCIÓN