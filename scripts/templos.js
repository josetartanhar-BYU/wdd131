const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('open');

    if (menu.classList.contains("open")) {
        menuButton.textContent = '❌';
    } else {
        menuButton.textContent = '☰'
        menuButton.setAttribute('aria-label', 'Abrir menu de navegação');
    }

});

