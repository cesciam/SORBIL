'use strict';

const tbodyClubes = document.querySelector('#tabla-clubes tbody');
const tbodyLibrerias = document.querySelector('#tabla-librerias tbody');
const tbodyLibros = document.querySelector('#tabla-libros tbody');
let lista_clubes = [];
let lista_librerias = [];
let lista_libros = [];


let mostrar_clubes = async () => {

    lista_clubes = await obtenerClubes();
    tbodyClubes.innerHTML = '';


    for (let i = 0; i < lista_clubes.length; i++) {
        let fila = tbodyClubes.insertRow();
        let tema = lista_clubes[i]['tema'];
        let tipo = lista_clubes[i]['tipo'];
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = `${tema}`;
        boton_perfil.dataset._id = lista_clubes[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function () {
            if (tipo == 'Club Presencial') {
                window.location.href = `views/ver-perfil-club-presencial.html?_id=${this.dataset._id}`;
            } else if (tipo == 'Club Virtual') {
                window.location.href = `views/ver-perfil-club-virtual.html?_id=${this.dataset._id}`;
            }
        });
    }
};

let mostrar_librerias = async () => {

    lista_librerias = await obtenerLibrerias();
    tbodyLibrerias.innerHTML = '';


    for (let i = 0; i < lista_librerias.length; i++) {
        let fila = tbodyLibrerias.insertRow();
        let empresa = lista_librerias[i]['empresa'];
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = `${empresa}`;
        boton_perfil.dataset._id = lista_librerias[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function () {
                window.location.href = `views/ver-perfil-libreria.html?_id=${this.dataset._id}`;
        });
    }
};

let mostrar_libros = async () => {

    lista_libros = await obtenerLibros();
    tbodyLibros.innerHTML = '';


    for (let i = 0; i < lista_libros.length; i++) {
        let fila = tbodyLibros.insertRow();
        let titulo = lista_libros[i]['titulo'];
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = `${titulo}`;
        boton_perfil.dataset._id = lista_libros[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function () {
                window.location.href = `views/ver-perfil-libro.html?_id=${this.dataset._id}`;
        });
    }
};

mostrar_clubes();
mostrar_librerias();
mostrar_libros();