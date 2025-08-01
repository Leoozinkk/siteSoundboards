const buttons = document.getElementsByClassName('audiobtn');
let audio = document.querySelectorAll('audio');
const speaker = document.getElementsByClassName('speaker');
const input = document.querySelectorAll('input[type="range"]');

//função q faz todos os áudios pararem
function parar(){
  for (let i = 0; i < audio.length; i++) {
    audio[i].pause(); //pausar o som onde ele está
  }
};

//botão de mute
document.getElementById('btnmute').onclick = function(){
  parar();
  for (let i = 0; i < audio.length; i++){
    audio[i].currentTime = 0;
  }
};

//função que faz os áudios pararem apenas se a checkbox estiver verificada (usado nos botões de áudio)
function voltarDoZero(){
  if (document.getElementById('opcaoPausar').checked) {
    parar();
  }
};

//faz o valor do input acompanhar o tempo do áudio (vezes 100 pra ser mais flúido)
function barraDeAudio(arg){
  audio[arg].addEventListener('timeupdate', ()=>{
    input[arg].value = ((audio[arg].currentTime.toFixed(2))*100); //toFixed(2) para quando for multiplicado ser um número inteiro
  });
  input[arg].addEventListener('input', ()=>{
    audio[arg].currentTime = ((input[arg].value)/100);
  });
}

//função que determina se os ícones de alto-falantes aparecem ou não segundo a checkbox e depois desaparecem quando acabar o áudio
function speakerDisplay(arg){
  if (document.getElementById('opcaoSpeaker').checked){
    audio[arg].addEventListener('playing', ()=>{
      speaker[arg].style.display = 'block';
    })
  }
};

for (let i = 0; i < audio.length; i++){ //faz todas as configurações necessárias e depois toca o áudio
  audio[i].addEventListener('loadedmetadata', ()=>{ //define o valor máximo do input baseado no áudio após ele ter carregado
    input[i].max = ((audio[i].duration.toFixed(2))*100) //toFixed(2) para quando for multiplicado ser um número inteiro
  });
  buttons[i].onclick = function(){
    if(audio[i].paused){
      console.log(input[i].max)
      voltarDoZero();
      audio[i].currentTime = (input[i].value/100);
      audio[i].play();
      barraDeAudio(i);
      speakerDisplay(i);
      audio[i].onpause = function(){speaker[i].style.display = 'none';};
      audio[i].onended = function(){audio[i].currentTime = 0;}
    }else{
      audio[i].pause();
    }
  };
}


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
};

//muda o id do input se o mouse (ou toque) for em cima dele (usado para estilização do ponteiro)
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('mouseenter', ()=>{
    input[i].id = 'input-ativo';
    console.log('id colocado');
  });
  input[i].addEventListener('touchstart', ()=>{
    input[i].id = 'input-ativo';
    console.log('id colocado');
  });
  input[i].addEventListener('mouseout', ()=>{
    input[i].id = 'input-nao-ativo';
    console.log('id tirado');
  });
  input[i].addEventListener('touchend', ()=>{
    input[i].id = 'input-nao-ativo';
    console.log('id tirado');
  });
  input[i].addEventListener('touchcancel', ()=>{
    input[i].id = 'input-nao-ativo';
    console.log('id tirado');
  });
}

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