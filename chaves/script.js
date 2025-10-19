const buttons = document.getElementsByClassName('audiobtn');
let audio = document.querySelectorAll('audio');
const speaker = document.getElementsByClassName('speaker');
const input = document.querySelectorAll('input[type="range"]');

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

//função que determina se os ícones de alto-falantes aparecem ou não segundo a checkbox e depois desaparecem quando acabar o áudio
function speakerDisplay(arg){
  if (document.getElementById('opcaoSpeaker').checked){
    audio[arg].onplaying = () => speaker[arg].style.display = 'block';
  }
};

//cada operação dentro do loop for
for (let i = 0; i < audio.length; i++){

  audio[i].onloadedmetadata = () => input[i].max = audio[i].duration //define o valor máximo do input baseado no áudio após ele ter carregado

  buttons[i].onclick = () =>{
    if(audio[i].paused){
      if (document.getElementById('opcaoPausar').checked){parar()}
      audio[i].currentTime = input[i].value;
      audio[i].play();
      input[i].oninput = () => audio[i].currentTime = input[i].value;
      speakerDisplay(i);
    }else{
      audio[i].pause();
    }
  };
  audio[i].ontimeupdate = () => input[i].value = audio[i].currentTime
  audio[i].onpause = () => speaker[i].style.display = 'none';
  audio[i].onended = () => audio[i].currentTime = 0;

  /*muda o id do input se o mouse (ou toque) for em cima dele (usado para estilização do ponteiro)
  input[i].onmouseenter = () => input[i].id = 'input-ativo';
  input[i].ontouchstart = () => input[i].id = 'input-ativo';
  input[i].onmouseout = () => input[i].id = 'none';
  input[i].ontouchend = () => input[i].id = 'none';
  input[i].ontouchcancel = () => input[i].id = 'none';*/
}