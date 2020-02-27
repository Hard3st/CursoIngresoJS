function mostrar()
{

    var num; 
    var i;
    var numDivisores = 0;

    num = parseInt(prompt("Ingrese el numero a dividir: "));

    while(isNaN(num) || num < 1){
        num = parseInt(prompt("Numero invalido. Ingrese nuevamente un numero: "));
    }

    for(i=0;i<=num;i++){
        if(num % i == 0){
            console.log(i);
            numDivisores ++;
        }
    }

    console.log("La cantidad de divisores son: "+numDivisores);

}//FIN DE LA FUNCIÓN