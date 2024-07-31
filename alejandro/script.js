//toca os áudios com os botões de mesma posição no html
const buttons = document.getElementsByClassName('audiobtn');
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
function voltarDoZero(){
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