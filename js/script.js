const slime = document.querySelector('.slime');
const pedra = document.querySelector('.obstaculo');
let pontos = 0;
var playing = true;




function resetar(){
    location.reload()
}

function placar() {
    pontos += 0.5;
    document.getElementById("pontuacao").innerHTML = `Score: ${pontos}`;
    console.log(pontos);
}

function jump() {
    slime.classList.add('jump');
    slime.src = './images/jump.webp';

    setTimeout(() => {
        slime.classList.remove('jump');
        slime.src = './images/running.webp';
    }, 800);
    if(playing){
        placar();
    }
    
}

pedra.addEventListener('animationiteration', function () {
    placar();
});

const loop = setInterval(() => {
    const pedraPosition = pedra.offsetLeft;
    const slimePosition = +window.getComputedStyle(slime).bottom.replace('px', '');

    if (pedraPosition <= 80 && pedraPosition > 0 && slimePosition < 10) {
        pedra.style.animation = 'none';
        pedra.style.left = `${pedraPosition}px`;

        slime.style.animation = 'none';
        slime.style.bottom = `${slimePosition}px`;

        slime.src = './images/death.png';
        slime.style.height = `${75}px`;
        slime.style.margin = '40px auto';

        playing = false;
    }
}, 10);

document.addEventListener('keyup', function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        jump();
    }
});
