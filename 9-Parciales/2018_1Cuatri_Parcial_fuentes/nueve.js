function mostrar()
{
    var marca;
    var peso;
    var i = 0;
    var pesoTot = 0;
    var promPeso = 0;
    var temperatura;
    var temperaturaPar = 0;
    var temperatura0 = 0;
    var pesoMax = 0;
    var pesoMin = 0;
    var marcaMax;
    var seguir;
    var flag = 0;

    do{
        marca = prompt("Ingrese la marca: ");

        peso = parseInt(prompt("Ingrese el peso del mismo: "));
        while(peso > 100 || peso < 0 || isNaN(peso)){
            peso = parseInt(prompt("Peso invalido. Ingrese el peso del mismo: "));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura del producto: "));
        while(temperatura > 30 || temperatura < -30 || isNaN(temperatura)){
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese la temperatura del producto: "));
        }

        if(temperatura % 2 == 0){
            temperaturaPar ++;
        }

        if(temperatura < 0){
            temperatura0 ++;
        }

        if(peso > pesoMax || flag == 0){
            pesoMax = peso;
            marcaMax = marca;
        }

        if(peso < pesoMin || flag == 0){
            pesoMin = peso;
            flag = 1;
        }

        pesoTot = pesoTot + peso;
        i ++;

        seguir = prompt("Desea continuar?");

    }while(seguir == 's');

    promPeso = pesoTot / i;

    document.write("Temperaturas Pares: "+temperaturaPar+"</br>"
        +"Marca del producto mas pesado: "+marcaMax+"</br>"
        +"Productos que se conservan a menos de 0º: "+temperatura0+"</br>"
        +"Promedio de todos los pesos: "+promPeso+"</br>"
        +"Peso maximo: "+ pesoMax +" Peso minimo: "+ pesoMin +"</br>");

}
