/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var gasto;
     var marca;
     var descuento;
     var impfinal;
     cantidad = parseInt(document.getElementById("Cantidad").value);
     marca = document.getElementById("Marca").value;
        
     switch(cantidad){
         case 5: 
            if(marca == "ArgentinaLuz"){
            gasto = cantidad * 35;
            descuento = gasto * 0.40;
            gasto = gasto - descuento;
         }
            else{
            gasto = cantidad * 35;
            descuento = gasto * 0.30;
            gasto = gasto - descuento;
         }
         break;
         case 4:
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    gasto = cantidad * 35;
                    descuento = gasto * 0.25;
                    gasto = gasto - descuento;
                }
                else{
                   gasto = cantidad * 35;
                   descuento = gasto * 0.20;
                   gasto = gasto - descuento;
                }
        break;
         case 3:
                if(marca == "ArgentinaLuz"){
                    gasto = cantidad * 35;
                    descuento = gasto * 0.15;
                    gasto = gasto - descuento; 
                }
                else if(marca == "FelipeLamparas"){
                    gasto = cantidad * 35;
                    descuento = gasto * 0.10;
                    gasto = gasto - descuento; 
                }
                else{
                    gasto = cantidad * 35;
                    descuento = gasto * 0.05;
                    gasto = gasto - descuento;
                }
        break;
        default:
            gasto = cantidad * 35;
            descuento = gasto * 0.5;
            gasto = gasto - descuento;
        break;
}

    if(gasto >= 120){
        impfinal = gasto * 0.10;
        gasto = gasto + impfinal;
        document.getElementById("precioDescuento").value = "Usted pago "+gasto+" de IIBB, con un impuesto de : "+impfinal;
    }
    else{
        document.getElementById("precioDescuento").value = gasto;
    }


}
