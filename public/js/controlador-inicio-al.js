'use strict';

const btn_perfil = document.querySelector('#ver_perfil_admin_libreria');
const btn_perfil_libro = document.querySelector('#ver_perfil_admin_libro');
const btn_perfil_categoria = document.querySelector('#ver_perfil_admin_categoria');

usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id = usuarioActivo._id;

btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-administrador-libreria.html?_id=${_id}`
});

btn_perfil_categoria.addEventListener('click', function () {
    window.location.href = `al-registrar-categorias.html?_id=${_id}`
});

btn_perfil_categoria.addEventListener('click', function () {
    window.location.href = `al-registrar-categorias.html?_id=${_id}`
});