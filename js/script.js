//Váriaveis Globais
var turno = "x";
var body = document.querySelector("body");
var qt_clicados = 0;
var st_jogo = true;		//True = jogando; False = acabou

//Funções do Jogo

//Função de click
function fazer_jogada(isto){
	//Verifica se o campo já foi selecionado
	if(isto.innerHTML == "" && st_jogo == true){
		//Campo não foi selecionado
		qt_clicados++;

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

		verificar_jogo();
	}else{
		//Campo já foi selecionado
	}
}
function verificar_jogo(){
	var vencedor = "";	//Guarda quem ganhou (caso vazio, ninguém ganhou ainda)
	var campos = [];	//Array que vai guardar os campos

	//Passa por todos os campos
	for(var y = 1; y <= 3; y++){
		campos[y] = [];
		for(var x = 1; x <= 3; x++){
			campos[y][x] = document.getElementById(x+"_"+y).getAttribute("content");

			if(campos[y][x] != 'x' && campos[y][x] != 'o'){
				campos[y][x] = false;
			}
		}
	}
	console.clear();
	console.table(campos);

	//Verifica as horizontais
	if(campos[1][1] == campos[1][2] && campos[1][1] == campos[1][3] && campos[1][1] != false){
		vencedor = campos[1][1];
	}else if(campos[2][1] == campos[2][2] && campos[2][1] == campos[2][3] && campos[2][1] != false){
		vencedor = campos[2][1];
	}else if(campos[3][1] == campos[3][2] && campos[3][1] == campos[3][3] && campos[3][1] != false){
		vencedor = campos[3][1];
	}
	//Verifica as verticais
	else if(campos[1][1] == campos[2][1] && campos[1][1] == campos[3][1] && campos[1][1] != false){
		vencedor = campos[1][1];
	}else if(campos[1][2] == campos[2][2] && campos[1][2] == campos[3][2] && campos[1][2] != false){
		vencedor = campos[1][2];
	}else if(campos[1][3] == campos[2][3] && campos[1][3] == campos[3][3] && campos[1][3] != false){
		vencedor = campos[1][3];
	}
	//Verifica as diagonais
	else if(campos[1][1] == campos[2][2] && campos[1][1] == campos[3][3] && campos[1][1] != false){
		vencedor = campos[1][1];
	}else if(campos[1][3] == campos[2][2] && campos[1][3] == campos[3][1] && campos[1][3] != false){
		vencedor = campos[1][3];
	}

	if(vencedor != ''){
		console.log(vencedor);
		terminar_jogo(vencedor);
	}else if(qt_clicados == 9){
		//Jogo deu velha
		console.log(vencedor);
		terminar_jogo("velha");
	}
	
}
function terminar_jogo(vencedor){
	st_jogo = false;
	setTimeout(function(){
		if(vencedor == "velha"){
			alert("O jogo acabou! \nDeu velha!!");
		}else{
			alert("O jogo acabou! \nO vencedor é "+vencedor);
		}
		setTimeout(function(){
			window.location = "index.html";
		},500);
	},450);
	
}