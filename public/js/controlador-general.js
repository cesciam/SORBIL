'use strict';

//Javascript general

// Función que permite mostrar y ocultar los links de listados y registros
const click_menu = (click) => document.querySelector(click);

//Dropdown de registros
click_menu('.dropdown-toggle1').addEventListener('click', (fixed) => {
    fixed.preventDefault();
    click_menu('.dropdown-menu1').classList.toggle('dropdown-mostrar1');
});

//Dropdown de listados
click_menu('.dropdown-toggle2').addEventListener('click', (fixed) => {
    fixed.preventDefault();
    click_menu('.dropdown-menu2').classList.toggle('dropdown-mostrar2');
});

//Dropdown de usuarios
click_menu('.mini-photo-wrapper').addEventListener('click', (fixed) => {
    fixed.preventDefault();
    click_menu('.menu-user-container').classList.toggle('active');
});

//Código para utiliza el carousel: https://github.com/glidejs/glide




