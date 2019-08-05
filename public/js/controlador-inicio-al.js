'use strict';

const btn_perfil = document.querySelector('#ver_perfil_admin_libreria');
//Permisos de usuario para registrar
const btn_registrar_categoria = document.querySelector('#registrar_adminal_categoria');
const btn_registrar_genero = document.querySelector('#registrar_adminal_genero');
const btn_registrar_oferta = document.querySelector('#registrar_adminal_oferta');
const btn_registrar_club_virtual = document.querySelector('#registrar_adminal_club_virtual');
const btn_registrar_club_presencial = document.querySelector('#registrar_adminal_club_presencial');

//Permisos de usuario para listar
const btn_listar_libros = document.querySelector('#listar_adminal_libros');
const btn_listar_usuarios = document.querySelector('#listar_adminal_usuarios');
const btn_listar_sucursales = document.querySelector('#listar_adminal_sucursales');
const btn_listar_autores = document.querySelector('#listar_adminal_autores');
const btn_listar_intercambios = document.querySelector('#listar_adminal_intercambios');
const btn_listar_ofertas = document.querySelector('#listar_adminal_ofertas');
const btn_listar_categorias = document.querySelector('#listar_adminal_categorias');
const btn_listar_generos = document.querySelector('#listar_adminal_generos');
const btn_listar_clubes = document.querySelector('#listar_adminal_clubes');

usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id = usuarioActivo._id;

btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-administrador-libreria.html?_id=${_id}`
});

//Permisos de usuario para registrar

btn_registrar_categoria.addEventListener('click', function () {
    window.location.href = `al-registrar-categorias.html?_id=${_id}`
});

btn_registrar_genero.addEventListener('click', function () {
    window.location.href = `al-registrar-generos.html?_id=${_id}`
});

btn_registrar_oferta.addEventListener('click', function () {
    window.location.href = `al-registrar-oferta.html?_id=${_id}`
});

btn_registrar_club_presencial.addEventListener('click', function () {
    window.location.href = `al-registrar-club-presencial.html?_id=${_id}`
});

btn_registrar_club_virtual.addEventListener('click', function () {
    window.location.href = `al-registrar-club-virtual.html?_id=${_id}`
});


//Permisos de usuario para listar

btn_listar_libros.addEventListener('click', function () {
    window.location.href = `al-listar-libros.html?_id=${_id}`
});

btn_listar_usuarios.addEventListener('click', function () {
    window.location.href = `al-listar-usuarios.html?_id=${_id}`
});

btn_listar_sucursales.addEventListener('click', function () {
    window.location.href = `al-listar-sucursales.html?_id=${_id}`
});

btn_listar_autores.addEventListener('click', function () {
    window.location.href = `al-listar-autores.html?_id=${_id}`
});

btn_listar_intercambios.addEventListener('click', function () {
    window.location.href = `al-listar-intercambios.html?_id=${_id}`
});

btn_listar_ofertas.addEventListener('click', function () {
    window.location.href = `al-listar-ofertas.html?_id=${_id}`
});

btn_listar_categorias.addEventListener('click', function () {
    window.location.href = `al-listar-categorias.html?_id=${_id}`
});

btn_listar_generos.addEventListener('click', function () {
    window.location.href = `al-listar-generos.html?_id=${_id}`
});

btn_listar_clubes.addEventListener('click', function () {
    window.location.href = `al-listar-clubes.html?_id=${_id}`
});