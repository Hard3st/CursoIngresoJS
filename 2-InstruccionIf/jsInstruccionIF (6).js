function mostrar()
{
//tomo la edad  

edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18){
    alert("Usted es adulto");
    }
    else if(edad <=17 && edad >= 13){
    alert("Usted es adolescente");
    }
    else{
    alert("Usted es un niño");
    }
}//FIN DE LA FUNCIÓN