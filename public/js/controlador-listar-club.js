'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_clubes = [];
let txt_filtro = document.querySelector('#txt-filtro');

let mostrar_tabla = async () => {

    lista_clubes = await obtenerClubes();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_clubes.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_clubes[i]['nombre'];
        fila.insertCell().innerHTML = lista_clubes[i]['tema'];
        fila.insertCell().innerHTML = lista_clubes[i]['categoria'];
        fila.insertCell().innerHTML = lista_clubes[i]['genero'];

        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_clubes[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function () {
            window.location.href = `ver-perfil-club.html?_id=${this.dataset._id}`;
        });
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_clubes.length; i++) {
        if (lista_clubes[i]['nombre'].toLowerCase().includes(filtro) || lista_clubes[i]['tema'].toLowerCase().includes(filtro) || lista_clubes[i]['categoria'].toLowerCase().includes(filtro) || lista_clubes[i]['genero'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_clubes[i]['nombre'];
            fila.insertCell().innerHTML = lista_clubes[i]['tema'];
            fila.insertCell().innerHTML = lista_clubes[i]['categoria'];
            fila.insertCell().innerHTML = lista_clubes[i]['genero'];
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);