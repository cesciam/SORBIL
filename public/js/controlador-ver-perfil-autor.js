'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const txt_autor = document.querySelector('#txt_autor');
const txt_fecha = document.querySelector('#txt_fecha');
const txt_biografia = document.querySelector('#txt_biografia');

let llenar_perfil = async() => {
    let contacto = await obtenerContactoId(_id);
    if (contacto) {
        txt_autor.innerHTML = contacto['autor'];
        txt_fecha.innerHTML = contacto['fecha'];
        txt_biografia.innerHTML = contacto['biografia'];
    }
};

llenar_perfil();