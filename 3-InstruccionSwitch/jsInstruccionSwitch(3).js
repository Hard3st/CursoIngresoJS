function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){
    case "Febrero":
    alert("Este mes no tiene màs de 29 dìas");
    break;

    default:
    alert("Este mes tiene 30 dìas o màs");
}
	
	


}//FIN DE LA FUNCIÓN