//toca os áudios com os botões de mesma posição no html
const buttons = document.getElementsByTagName('button');
const audios = document.getElementsByTagName('audio');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    voltarDoZero();
    audios[i].play();
  };
}

document.getElementById('btnmute').onclick = function(){parar()}; //botão de mute

var som = document.querySelectorAll('audio'); //todos os elementos de áudio

//função que faz os audios pararem apenas se a checkbox estiver verificada (usado nos botões com áudio)
function voltarDoZero() {
    var checkbox_parar = document.getElementById('opcaoParar'); //checkbox de parar os sons
    if (checkbox_parar.checked) {
        parar()
    }
};

//função q faz todos os áudios pararem (usado no botão de mute)
function parar(){
    for (var i = 0; i < som.length; i++) {
        som[i].pause(); //pausar o som onde ele está
        som[i].currentTime = 0; //voltar o som do zero
    }
};

/*//SEÇÃO DO LUIZ VIADO CAGOU NO ALAMBRADO
const buttonContainer = document.getElementById('luiz');
sfx = document.getElementsByTagName('audio')[18];
sfx.volume  = .35;

function criarBotao(){
	sfx.play();
	const button = document.createElement('button');
	button.className = 'btn btn-primary';
	button.id = 'botaoLuiz';
	button.textContent = 'Luiz Mode';
	buttonContainer.style.display  = 'block';
	buttonContainer.appendChild(button);
};

//PARA PC
const requiredKeys = ['KeyP', 'KeyA', 'KeyU', 'KeyL', 'KeyO', 'KeyE', 'KeyS', 'KeyC', 'KeyO', 'KeyB', 'KeyR', 'KeyA', 'KeyN', 'KeyO']; //as teclas que tem que apertar
let pressedKeys = [];

document.addEventListener('keydown', (event) => {
	pressedKeys.push(event.code);
	if (pressedKeys.length > requiredKeys.length) {
		pressedKeys.shift();
	} //faz a tecla pressionada ter o seu valor salvo na lista "pressedKeys" e remove as teclas antigas
	if (pressedKeys.toString() === requiredKeys.toString() && document.getElementById('botaoLuiz') == null){ //para evitar que tenha mais de um botão
		criarBotao();
	} //cria o botão e toca o efeitinho se a condicional for cumprida
});

//PARA CELULAR
botaoSegurar = document.getElementById("hold");
let timer;

botaoSegurar.addEventListener('touchstart', () => {
	timer = setTimeout(() => {
		if(document.getElementById('botaoLuiz') == null){
			criarBotao();
		}
	}, 5000);
});

botaoSegurar.addEventListener('touchend', () => {
	clearTimeout(timer);
});*/