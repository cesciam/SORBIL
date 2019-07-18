'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_librerias = [];
let txt_filtro = document.querySelector('#txt-filtro');

let mostrar_tabla = async () => {

    lista_librerias = await obtenerLibrerias();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_librerias.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_librerias[i]['usuario'];
        fila.insertCell().innerHTML = lista_librerias[i]['correo'];
        fila.insertCell().innerHTML = lista_librerias[i]['empresa'];
        fila.insertCell().innerHTML = lista_librerias[i]['telefono'];
        fila.insertCell().innerHTML = lista_librerias[i]['provincia'];
        fila.insertCell().innerHTML = lista_librerias[i]['canton'];
        fila.insertCell().innerHTML = lista_librerias[i]['distrito'];
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_librerias.length; i++) {
        if (lista_librerias[i]['usuario'].toLowerCase().includes(filtro) || lista_librerias[i]['correo'].toLowerCase().includes(filtro) || lista_librerias[i]['empresa'].toLowerCase().includes(filtro) || lista_librerias[i]['telefono'].toLowerCase().includes(filtro) || lista_librerias[i]['provincia'].toLowerCase().includes(filtro) || lista_librerias[i]['canton'].toLowerCase().includes(filtro) || lista_librerias[i]['distrito'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_librerias[i]['usuario'];
            fila.insertCell().innerHTML = lista_librerias[i]['correo'];
            fila.insertCell().innerHTML = lista_librerias[i]['empresa'];
            fila.insertCell().innerHTML = lista_librerias[i]['telefono'];
            fila.insertCell().innerHTML = lista_librerias[i]['provincia'];
            fila.insertCell().innerHTML = lista_librerias[i]['canton'];
            fila.insertCell().innerHTML = lista_librerias[i]['distrito'];
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
