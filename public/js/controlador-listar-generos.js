'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_generos = [];

let mostrar_tabla = async () => {
    tbody.innerHTML = '';
    lista_generos = await obtenerGeneros();

    for (let i = 0; 1 < lista_generos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_generos[i]['genero'];
    }
};

mostrar_tabla();