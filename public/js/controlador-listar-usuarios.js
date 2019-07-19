'use strict';

const tbody = document.querySelector('#tabla-usuario tbody');
let lista_usuarios = [];
let txt_filtro = document.querySelector('#txt-filtro');


let mostrar_tabla = async () => {

    lista_usuarios = await obtenerUsuarios();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_usuarios.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_usuarios[i]['usuario'];
        fila.insertCell().innerHTML = lista_usuarios[i]['nombre'];
        fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
        fila.insertCell().innerHTML = lista_usuarios[i]['primer_apellido'];
        fila.insertCell().innerHTML = lista_usuarios[i]['segundo_apellido'];
        fila.insertCell().innerHTML = lista_usuarios[i]['provincia'];
        fila.insertCell().innerHTML = lista_usuarios[i]['canton'];
        fila.insertCell().innerHTML = lista_usuarios[i]['distrito'];
    }
};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_usuarios.length; i++) {
        if (lista_usuarios[i]['usuario'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['nombre'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['correo'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['primer_apellido'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['segundo_apellido'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['provincia'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['canton'].toLowerCase().includes(filtro) ||
            lista_usuarios[i]['distrito'].toLowerCase().includes(filtro)) {

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_usuarios[i]['usuario'];
            fila.insertCell().innerHTML = lista_usuarios[i]['nombre'];
            fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
            fila.insertCell().innerHTML = lista_usuarios[i]['primer_apellido'];
            fila.insertCell().innerHTML = lista_usuarios[i]['segundo_apellido'];
            fila.insertCell().innerHTML = lista_usuarios[i]['provincia'];
            fila.insertCell().innerHTML = lista_usuarios[i]['canton'];
            fila.insertCell().innerHTML = lista_usuarios[i]['distrito'];
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);