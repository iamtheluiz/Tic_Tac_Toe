//Váriaveis Globais
var turno = "x";
var body = document.querySelector("body");

//Funções do Jogo

//Função de click
function fazer_jogada(isto){
	//Verifica se o campo já foi selecionado
	if(isto.innerHTML == ""){
		//Campo não foi selecionado
		if(turno == "x"){
			body.setAttribute("class","red_player");
			isto.setAttribute("content","x");
			isto.innerHTML = "<div class='close'></div>";
			turno = "o";
		}else{
			body.setAttribute("class","blue_player");
			isto.setAttribute("content","o");
			isto.innerHTML = "<div class='circle'></div>";
			turno = "x";
		}
	}else{
		//Campo já foi selecionado
	}
}
function verificar_jogo(){

}