function mostrar()
{
//tomo la edad  
var edad, estadoc;

edad = parseInt(document.getElementById("edad").value);
estadoc = document.getElementById("estadoCivil").value;
	
if(edad >= 18 && estadoc == "Soltero"){
    alert("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN