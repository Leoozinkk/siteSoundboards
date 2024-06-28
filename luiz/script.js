//pega o botão pelo id e executa os audios de acordo com a posição no html
document.getElementById('gio').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[0].play()};
document.getElementById('gioD').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[1].play()};
document.getElementById('queisso').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[2].play()};
document.getElementById('paulo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[3].play()};
document.getElementById('disco').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[4].play()};
document.getElementById('tiquinho').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[5].play()};
document.getElementById('agua').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[6].play()};
document.getElementById('esquizo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[7].play()};
document.getElementById('xtudo').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[8].play()};
document.getElementById('calica').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[9].play()};
document.getElementById('ia').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[10].play()}
document.getElementById('vaisefuderluiz').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[11].play()};
document.getElementById('mamonas').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[12].play()}; 
document.getElementById('cagou').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[13].play()}; 
document.getElementById('viado').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[14].play()}; 
document.getElementById('hitler').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[15].play()};
document.getElementById('antonio').onclick  = function(){voltarDoZero(), document.getElementsByTagName('audio')[16].play()};
document.getElementById('crazy').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[17].play()};
document.getElementById('julia').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[18].play()};
document.getElementById('sinais').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[19].play()};
document.getElementById('loleza2').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[20].play()};
document.getElementById('lolezaR').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[21].play()};
document.getElementById('chorando').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[22].play()};
document.getElementById('cagano').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[23].play()};
document.getElementById('loleza1').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[24].play()};
document.getElementById('cecato').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[25].play()};
document.getElementById('bomdia').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[26].play()};
document.getElementById('musica').onclick = function(){voltarDoZero(), document.getElementsByTagName('audio')[27].play()};

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