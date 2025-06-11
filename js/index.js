// Script do slider (mantido como está, mas pode ser movido para um arquivo separado se ficar muito grande)
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.getElementById('indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active'); // Verifica se existe antes de remover

    items[active].classList.add('active');

    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active'); // Verifica se existe antes de remover
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

// Verifica se os botões existem antes de adicionar o event listener
if (nextButton) {
    nextButton.onclick = () => {
        list.style.setProperty('--calculation', 1);
        active = active + 1 > lastPosition ? 0 : active + 1;
        setSlider();
    };
}

if (prevButton) {
    prevButton.onclick = () => {
        list.style.setProperty('--calculation', -1);
        active = active - 1 < firstPosition ? lastPosition : active - 1;
        setSlider();
    };
}


