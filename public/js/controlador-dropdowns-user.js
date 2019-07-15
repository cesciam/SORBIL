// Función que permite mostrar y ocultar los links de listados y registros (No borrar el código comentado)
const click_menu = (click) => document.querySelector(click);

//Dropdown de usuarios
click_menu('.mini-photo-wrapper').addEventListener('click', (fixed) => {
    fixed.preventDefault();

    click_menu('.menu-user-container').classList.toggle('active');
});