const buttons = document.getElementsByClassName('audiobtn');
let audio = document.querySelectorAll('audio');
const speaker = document.getElementsByClassName('speaker');
const input = document.querySelectorAll('input[type="range"]');
const opcaoSeta = document.getElementsByClassName('transcImg');
const textoTranscrito = document.getElementsByClassName('transcText');

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

  audio[i].onloadedmetadata = () => input[i].max = audio[i].duration //define o valor máximo do input baseado no áudio após ele ter carregado

  buttons[i].onclick = () =>{
    if(audio[i].paused){
      if (document.getElementById('opcaoPausar').checked){parar()}
      audio[i].currentTime = input[i].value;
      audio[i].play();
      input[i].oninput = () => audio[i].currentTime = input[i].value;
      if (document.getElementById('opcaoSpeaker').checked){speaker[i].style.display = 'block';}
    }else{
      audio[i].pause();
    }
  };
  audio[i].ontimeupdate = () => input[i].value = audio[i].currentTime
  audio[i].onpause = () => speaker[i].style.display = 'none';
  audio[i].onended = () => audio[i].currentTime = 0;

  //fazer o balão do transcritor abrir ao clicar
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