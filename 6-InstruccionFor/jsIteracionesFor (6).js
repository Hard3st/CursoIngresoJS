function mostrar()
{
var num;
var par;
var contapar = 0;
num = parseInt(prompt("Ingrese un numero"));
for(var i=0;i>=num;i++){
    
    par = num % 2;
    if(par == 0){
        console.log(num);
        contapar++;
    }
    
}
alert("La cantidad de numeros pares son: "+ i);


}//FIN DE LA FUNCIÓN