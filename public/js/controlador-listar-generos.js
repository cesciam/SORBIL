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


        let celdaIcono = fila.insertCell();
        let aIcono = document.createElement('a');
        aIcono.className = 'list-icon';
        let icon = document.createElement('i');
        icon.className = 'bx bxs-edit';
        aIcono.appendChild(icon);

        celdaIcono.appendChild(aIcono);
        icon.addEventListener('click', function () {
            window.location.href = `al-editar-genero.html?_id=${lista_generos[i]['_id']}`;
        });
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


