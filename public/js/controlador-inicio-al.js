'use strict';

const btn_perfil = document.querySelector('#ver_perfil_admin_libreria');
const btn_registrar_categoria = document.querySelector('#registrar_adminal_categoria');
const btn_registrar_genero = document.querySelector('#registrar_adminal_genero');
const btn_registrar_club = document.querySelector('#registrar_adminal_club');
const btn_registrar_oferta = document.querySelector('#registrar_adminal_oferta');

usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id = usuarioActivo._id;

btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-administrador-libreria.html?_id=${_id}`
});

btn_registrar_categoria.addEventListener('click', function () {
    window.location.href = `al-registrar-categorias.html?_id=${_id}`
});

btn_registrar_genero.addEventListener('click', function () {
    window.location.href = `al-registrar-generos.html?_id=${_id}`
});

btn_registrar_club.addEventListener('click', function () {
    window.location.href = `al-seleccionar-club.html?_id=${_id}`
});

btn_registrar_oferta.addEventListener('click', function () {
    window.location.href = `al-registrar-oferta.html?_id=${_id}`
});