function mostrar()
{
//tomo la edad  
var edad, estadoc;

edad = parseInt(document.getElementById("edad").value);
estadoc = document.getElementById("estadoCivil").value;

if (edad <= 17 && estadoc != "Soltero"){
   alert("Es muy pequeño para no ser soltero");
}


}//FIN DE LA FUNCIÓN