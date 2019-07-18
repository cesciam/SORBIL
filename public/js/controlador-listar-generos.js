'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_generos = [];
const txt_filtro = document.querySelector('#txt-filtro');


let mostrar_tabla = async () => {
    
    lista_generos = await obtenerGeneros();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_generos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_generos[i]['genero'];
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_generos.length; i++) {
        if (lista_generos[i]['genero'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_generos[i]['genero'];
        }

    }


};

mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);


