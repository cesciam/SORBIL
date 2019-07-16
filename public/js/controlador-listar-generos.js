'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
const inputFiltro = document.querySelector('#txt-filtro');

let lista_generos = [];

let mostrar_tabla = async () => {
    let filtro = inputFiltro.value;
    lista_generos = await obtenerGeneros();
    tbody.innerHTML = '';

    for (let i = 0; 1 < lista_generos.length; i++) {
        if (lista_generos[i]['genero'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_generos[i]['genero'];
        }
    }
};

mostrar_tabla();

inputFiltro.addEventListener('keyup', mostrar_tabla);
