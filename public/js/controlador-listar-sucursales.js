'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let txt_filtro = document.querySelector('#txt-filtro');
let lista_sucursales = [];

let usuarioActivoLibreria = JSON.parse(sessionStorage.getItem('activo'));
let usuario_activo_libreria = usuarioActivoLibreria.correo;

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales(usuario_activo_libreria);
    
    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
        fila.insertCell().innerHTML = lista_sucursales[i]['provincia'];
        fila.insertCell().innerHTML = lista_sucursales[i]['canton'];
        fila.insertCell().innerHTML = lista_sucursales[i]['distrito'];
    }
};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i]['nombre'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['telefono'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['provincia'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['canton'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['distrito'].toLowerCase().includes(filtro)) {

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
            fila.insertCell().innerHTML = lista_sucursales[i]['provincia'];
            fila.insertCell().innerHTML = lista_sucursales[i]['canton'];
            fila.insertCell().innerHTML = lista_sucursales[i]['distrito'];
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);