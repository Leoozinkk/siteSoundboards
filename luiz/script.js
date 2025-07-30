const buttons = document.getElementsByClassName('audiobtn');
let audio = document.querySelectorAll('audio');
const speaker = document.getElementsByClassName('speaker');

for (let i = 0; i < buttons.length; i++){ // relaciona a ordem da posição botão apertado com a dos áudios e ativa seu respectivo ícone de alto-falante
  buttons[i].onclick = function(){
    voltarDoZero();
    audio[i].play();
    speakerDisplay(i);
  };
}

document.getElementById('btnmute').onclick = function(){parar()}; //botão de mute

//função q faz todos os áudios pararem (usado no botão de mute)
function parar(){
  for (let i = 0; i < audio.length; i++) {
    audio[i].pause(); //pausar o som onde ele está
    audio[i].currentTime = 0; //voltar o som do zero
    if (speaker[i]) { // confere se a chamada para o "speaker" existe para evitar erros
      speaker[i].style.display = 'none';
    }
  }
};

//função que faz os áudios pararem apenas se a checkbox estiver verificada (usado nos botões de áudio)
function voltarDoZero(){
  let checkbox_parar = document.getElementById('opcaoParar'); //checkbox de parar os sons
  if (checkbox_parar.checked) {
    parar();
  }
};

//função que determina se os ícones de alto-falantes aparecem ou não segundo a checkbox e depois desaparecem quando acabar o áudio
function speakerDisplay(arg){
  let checkbox_speaker = document.getElementById('opcaoSpeaker');
  if (checkbox_speaker.checked){
    speaker[arg].style.display = 'block';
  }
  audio[arg].onended = function(){speaker[arg].style.display = 'none';}
};

//SEU GATOOOOOOOOOO
let sfx = new Audio('luiz/sounds/misterious.mp3')
sfx.volume = .35;
const divCecato = document.querySelector('#divCecato');

function cecato(){
  sfx.play();
  divCecato.style.display = 'contents';
};

const requiredKeys = ['KeyC', 'KeyE', 'KeyC', 'KeyA', 'KeyT', 'KeyO']; //as teclas que tem que apertar
let pressedKeys = [];

document.addEventListener('keydown', (event) => {
	pressedKeys.push(event.code);
	if (pressedKeys.length > requiredKeys.length) {
		pressedKeys.shift();
	} //faz a tecla pressionada ter o seu valor salvo na lista "pressedKeys" e remove as teclas antigas
	if (pressedKeys.toString() === requiredKeys.toString() && divCecato.style.display == 'none'){ //chechar para "display: none" evita duplicação dos áudios
		cecato();
	} //cria o botão e toca o efeitinho se a condicional for cumprida
});

//celular
botaoSegurar = document.getElementById("hold");
let timer;

botaoSegurar.addEventListener('touchstart', () => {
	timer = setTimeout(() => {
		if(divCecato.style.display == 'none'){
			cecato();
		}
	}, 5000);
});

botaoSegurar.addEventListener('touchend', () => {
	clearTimeout(timer);
});

//fazer o balão do transcritor abrir ao clicar
const opcaoSeta = document.getElementsByClassName('transcImg');
const textoTranscrito = document.getElementsByClassName('transcText');

for (let i = 0; i < opcaoSeta.length; i++) {
  opcaoSeta[i].onclick = function(){
    if(textoTranscrito[i].style.display != 'block'){
      textoTranscrito[i].style.display = 'block';
      opcaoSeta[i].style.rotate = '180deg';
    }else{
      textoTranscrito[i].style.display = 'none';
      opcaoSeta[i].style.rotate = '0deg';
    }
  };
}