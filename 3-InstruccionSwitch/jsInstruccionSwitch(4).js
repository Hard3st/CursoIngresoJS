function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("Este mes tiene 30 dìas");
    break;

    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    alert("Este mes tiene 31 dìas");
    break;

    default:
    alert("Este mes tiene 28 dìas");
    
}
	
	



}//FIN DE LA FUNCIÓN