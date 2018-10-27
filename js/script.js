//Váriaveis Globais
var turno = "x";	

//Funções do Jogo

//Função de click
function fazer_jogada(isto){
	//Verifica se o campo já foi selecionado
	if(isto.innerHTML == ""){
		//Campo não foi selecionado
		if(turno == "x"){
			isto.innerHTML = "<div class='close'></div>";
			turno = "o";
		}else{
			isto.innerHTML = "<div class='circle'></div>";
			turno = "x";
		}
	}else{
		//Campo já foi selecionado
	}
}