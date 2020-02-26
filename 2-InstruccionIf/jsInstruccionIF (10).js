function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomv;

	randomv = parseInt(Math.floor(Math.random() * (11 - 1))+1);

	if(randomv == 9 || randomv == 10){
		alert("Nota: "+randomv+ " Excelente");
	}

	else if(randomv >= 4 && randomv <= 8){
		alert("Nota: "+randomv+" Aprobò");
	}

	else if(randomv < 4){
		alert("Nota: "+randomv+" Vamos, la pròxima se puede");
	}

}//FIN DE LA FUNCIÓN