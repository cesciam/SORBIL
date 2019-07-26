'use strict';

const botones = document.querySelectorAll("#nav-inicio div");

let activo = sessionStorage.getItem('activo');
let tipo_usuario = sessionStorage.getItem('tipo-usuario');

if (activo) {
    switch (tipo_usuario) {
        case 'ap':

            break;
        case 'al':

            break;
        case 'u':
        botones[0].classList.add('ocultar');
        botones[1].classList.add('ocultar');
        botones[2].classList.add('ocultar');
        botones[3].classList.add('ocultar');
        botones[4].classList.add('ocultar');
            break;
    }
} else {
    window.location.href = 'u-inicio.html'
}

function cerrar_sesion() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

btn_cerrar_sesion.addEventListener('click', btn-cerrar-sesion);