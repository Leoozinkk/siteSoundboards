let audio = document.querySelectorAll('audio');
const barra = document.querySelectorAll('.audio-track')
const progresso = document.querySelectorAll('.audio-progress')
const buttons = document.getElementsByClassName('audiobtn');
const speaker = document.getElementsByClassName('speaker');
const opcaoSeta = document.getElementsByClassName('transcImg');
const textoTranscrito = document.getElementsByClassName('transcText');

let isDragging = false;
let currentAudio = null;
let currentBarra = null;

window.onload = () => {
  document.getElementById('loading').style.opacity = 0;
  document.getElementById('loading').style.display = 'none';
}

function parar(){
  for (let i = 0; i < audio.length; i++) {
    audio[i].pause();
  }
}

//botão de mute
document.getElementById('btnmute').onclick = () => {
  for (let i = 0; i < audio.length; i++){
    audio[i].pause();
    audio[i].currentTime = 0;
  };
}

//cada operação dentro do loop for
for (let i = 0; i < audio.length; i++){

  buttons[i].onclick = () =>{
    if(audio[i].paused){
      if(document.getElementById('opcaoPausar').checked){parar()}
      audio[i].play();
      if(document.getElementById('opcaoSpeaker').checked){speaker[i].style.display = 'block';}
    }else{
      audio[i].pause();
    }
  };

  barra[i].onmousedown = (e) => {
    isDragging = true;
    currentAudio = audio[i];
    currentBarra = barra[i];
    const rect = barra[i].getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    const percentage = clickX / barWidth;
    audio[i].currentTime = percentage * audio[i].duration;
  }

  barra[i].ontouchmove = (e) => {
    currentAudio = audio[i];
    currentBarra = barra[i];
    const rect = barra[i].getBoundingClientRect();
    const clickX = e.touches[0].clientX - rect.left;
    const barWidth = rect.width;
    const percentage = clickX / barWidth;
    audio[i].currentTime = percentage * audio[i].duration;
  }

  audio[i].ontimeupdate = () => progresso[i].style.width = `${(audio[i].currentTime/Math.round(audio[i].duration))*100}%`
  audio[i].onpause = () => speaker[i].style.display = 'none';
  audio[i].onended = () => audio[i].currentTime = 0;

  opcaoSeta[i].onclick = () => {
    if(textoTranscrito[i].style.display != 'block'){
      textoTranscrito[i].style.display = 'block';
      opcaoSeta[i].style.rotate = '180deg';
    }else{
      textoTranscrito[i].style.display = 'none';
      opcaoSeta[i].style.rotate = '0deg';
    }
  };

  /*muda o id do input se o mouse (ou toque) for em cima dele (usado para estilização do ponteiro)
  input[i].onmouseenter = () => input[i].id = 'input-ativo';
  input[i].ontouchstart = () => input[i].id = 'input-ativo';
  input[i].onmouseout = () => input[i].id = 'none';
  input[i].ontouchend = () => input[i].id = 'none';
  input[i].ontouchcancel = () => input[i].id = 'none';*/
}

document.onmousemove = (e) => {
  if (isDragging && currentAudio && currentBarra) {
    const rect = currentBarra.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    const percentage = Math.max(0, Math.min(1, clickX / barWidth));
    currentAudio.currentTime = percentage * currentAudio.duration;
  }
}

document.onmouseup = () => {
  isDragging = false;
  currentAudio = null;
  currentBarra = null;
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