'use strict';

const btn_perfil = document.querySelector('#ver_perfil_usuario');
const btn_seleccionar_club = document.querySelector('#seleccionar_u_club');

usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id2 = usuarioActivo._id;

btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-usuario.html?_id=${_id2}`
});

btn_seleccionar_club.addEventListener('click', function () {
    window.location.href = `u-seleccionar-club.html?_id=${_id2}`
});