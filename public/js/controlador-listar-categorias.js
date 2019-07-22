'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_categoria = [];
const txt_filtro = document.querySelector('#txt-filtro');


let mostrar_tabla = async () => {

    lista_categoria = await obtenerCategorias();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_categoria.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_categoria[i]['categoria'];
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_categoria.length; i++) {
        if (lista_categoria[i]['categoria'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_categoria[i]['categoria'];
        }

    }


};

mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);