function mostrar()
{

    var i;
    var notas;
    var sexo;
    var promTot;

    for(i=0;i<5;i++){

        notas = parseInt(prompt("Ingrese la nota del alumno: "));
        sexo = prompt("Ingrese el sexo del mismo: ");
        
        if(notas < 0 || notas > 10 || isNaN(notas)){
        while(sexo != 'f' || sexo != 'm'){
            alert("Invalido");
            notas = parseInt(prompt("Ingrese la nota del alumno: "));
            sexo = prompt("Ingrese el sexo del mismo: ");
        }}

        alert("valido");
    }

}
