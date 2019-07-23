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