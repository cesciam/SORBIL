'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_autores = [];
const txt_filtro = document.querySelector('#txt-filtro');

let mostrar_tabla = async () => {

    lista_autores = await obtenerAutor();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_autores[i]['autor'];

        let celdaPerfil = fila.insertCell();
        let btn_perfil = document.createElement('button');
        btn_perfil.type = 'button';
        btn_perfil.innerText = 'Ver perfil';
        btn_perfil.dataset._id = lista_autores[i]['_id'];

        celdaPerfil.appendChild(btn_perfil);

        btn_perfil.addEventListener('click', function(){
            window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`;
        });
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        if (lista_autores[i]['autor'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_autores[i]['autor'];

            let celdaPerfil = fila.insertCell();
            let btn_perfil = document.createElement('button');
            btn_perfil.type = 'button';
            btn_perfil.innerText = 'Ver perfil';
            btn_perfil.dataset._id = lista_autores[i]['_id'];
    
            celdaPerfil.appendChild(btn_perfil);
    
            btn_perfil.addEventListener('click', function(){
                window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`;
            });
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);