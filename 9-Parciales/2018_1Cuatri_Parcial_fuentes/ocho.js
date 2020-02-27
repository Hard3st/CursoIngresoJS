function mostrar()
{

    var num;
    var letra;
    var seguir;
    var numPares = 0;
    var numImpares = 0;
    var ceros = 0;
    var acumPos = 0;
    var contaPos = 0;
    var sumaNeg = 0;
    var promPos;
    var max;
    var maxLetra;
    var min;
    var minLetra;
    var flag = 0;

    do{

        num = parseInt(prompt("Ingrese un numero (-100/100): "));
        while(isNaN(num) || num < -100 || num > 100){
            num = parseInt(prompt("Dato invalido. Ingrese un numero (-100/100): "));
        }
        letra = prompt("Ingrese una letra para el mismo: ");
        while(!(isNaN(letra))){
            letra = prompt("Dato invalido. Ingrese una letra para el mismo: ");
        }

        if(num % 2 == 0){
            numPares ++;
        }
        else{
            numImpares ++;
        }

        if(num > 0){
            acumPos = acumPos + num;
            contaPos ++;
        }
        else if(num < 0){
            sumaNeg = sumaNeg + num;
        }
        else{
            ceros ++;
        }

        if(num > max || flag == 0){
            max = num;
            maxLetra = letra;
        }
        
        if(num < min || flag == 0){
            min = num;
            minLetra = letra;
            flag = 1;
        }

        seguir = prompt("Desea continuar? ");
    }while(seguir == 's');

    promPos = acumPos / contaPos;

    document.write("Cantidad de Pares "+numPares+"</br>"
        +"Cantidad de Impares "+numImpares+"</br>"
        +"Cantidad de Ceros "+ceros+"</br>"
        +"Promedio de Pos "+promPos+"</br>"
        +"Suma de Neg "+sumaNeg+"</br>"
        +"num Y letra MAX "+max +maxLetra+"</br>"
        +"num Y letra MIN "+min +minLetra);

}
