'use strict';

const btn_perfil = document.querySelector('#ver_perfil_usuario');
const btn_seleccionar_club_virtual = document.querySelector('#u-registrar-club-virtual');
const btn_seleccionar_club_presencial = document.querySelector('#u-registrar-club-presencial');
const btn_listar_compras = document.querySelector('#u-listar-compras');
const btn_listar_clubes = document.querySelector('#u-listar-clubes');
const btn_tarjetas = document.querySelector('#u-tarjetas');
const btn_listar_ofertas = document.querySelector('#u-listar-ofertas');


usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id2 = usuarioActivo._id;

btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-usuario.html?_id=${_id2}`
});

btn_seleccionar_club_virtual.addEventListener('click', function () {
    window.location.href = `u-registrar-club-virtual.html?_id=${_id2}`
});

btn_seleccionar_club_presencial.addEventListener('click', function () {
    window.location.href = `u-registrar-club-presencial.html?_id=${_id2}`
});


btn_listar_compras.addEventListener('click', function () {
    window.location.href = `u-listar-compras.html?_id=${_id2}`
});

btn_listar_clubes.addEventListener('click', function () {
    window.location.href = `u-listar-clubes.html?_id=${_id2}`
});

btn_tarjetas.addEventListener('click', function () {
    window.location.href = `u-tarjetas.html?_id=${_id2}`
});

btn_listar_ofertas.addEventListener('click', function () {
    window.location.href = `u-listar-ofertas.html?_id=${_id2}`
});