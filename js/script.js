//Váriaveis Globais
var turno = "x";	

//Funções do Jogo

//Função de click
function fazer_jogada(isto){
	if(turno == "x"){
		isto.innerHTML = "<div class='close'></div>";
		turno = "o";
	}else{
		isto.innerHTML = "<div class='circle'></div>";
		turno = "x";
	}
}