'use strict';

//Javascript general

// Función que permite mostrar y ocultar los links de listados y registros (No borrar el código comentado)
const click_menu = (click) => document.querySelector(click);

//Dropdown de usuarios
click_menu('.mini-photo-wrapper').addEventListener('click', (fixed) => {
    fixed.preventDefault();
    
    click_menu('.menu-user-container').classList.toggle('active');
});

let opened = null

const toggleVisibility = click => click.classList.toggle('dropdown-mostrar');

let handleDropdown = click => {

    let clickedItem = click.parentElement.lastChild.previousSibling

    toggleVisibility(clickedItem)

    if (!opened) {
        opened = clickedItem
    } else if (opened == clickedItem) {
        opened = null
    } else {
        toggleVisibility(opened)
        opened = clickedItem
    }
};

let handleClick = click => {

    if (click.target.className.includes('dropdown-toggle')) {
        handleDropdown(click.target)
    } else if (opened) {
        toggleVisibility(opened)
        opened = null
    }
};

document.addEventListener('click', handleClick);


//Código para utiliza el carousel: https://github.com/glidejs/glide



