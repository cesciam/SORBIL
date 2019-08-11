'use strict';

const btn_perfil = document.querySelector('#ver_perfil_usuario');
const btn_seleccionar_club_virtual = document.querySelector('#u-registrar-club-virtual');
const btn_seleccionar_club_presencial = document.querySelector('#u-registrar-club-presencial');
const btn_listar_compras = document.querySelector('#u-listar-compras');
const btn_listar_clubes = document.querySelector('#u-listar-clubes');
const btn_tarjetas = document.querySelector('#u-tarjetas');
const btn_listar_ofertas = document.querySelector('#u-listar-ofertas');
const btn_listar_intercambios = document.querySelector('#u-listar-intercambios');
const btn_listar_calificaciones = document.querySelector('#u-listar-calificaciones');
const btn_listar_notificaciones = document.querySelector('#u-listar-notificaciones');
const btn_listar_seguridad = document.querySelector('#u-listar-seguridad');


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

btn_listar_intercambios.addEventListener('click', function () {
    window.location.href = `u-listar-btn_listar_intercambios.html?_id=${_id2}`
});

btn_listar_calificaciones.addEventListener('click', function () {
    window.location.href = `u-listar-calificaciones.html?_id=${_id2}`
});

btn_listar_notificaciones.addEventListener('click', function () {
    window.location.href = `u-listar-notificaciones.html?_id=${_id2}`
});

btn_listar_seguridad.addEventListener('click', function () {
    window.location.href = `u-listar-seguridad.html?_id=${_id2}`
});