function mostrar()
{

var sexo;

sexo = prompt("ingrese f ó m.").toLowerCase();

while(!(sexo == 'f' || sexo == 'm')){

    sexo = prompt("Error, Ingrese un sexo f o m :").toLowerCase();

}

    document.getElementById('Sexo').value = sexo;
/*
while(sexo == "f"){
    sexo = "Femenino";
    document.getElementById('Sexo').value=sexo;
    sexo = "-";
    }
while(sexo == "m"){
    sexo = "Masculino";
    document.getElementById('Sexo').value=sexo;
    sexo = "-";
*/
}//FIN DE LA FUNCIÓN