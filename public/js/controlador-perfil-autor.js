'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const imagen = document.querySelector('#imagen');
const autor = document.querySelector('#autor');
const biografia = document.querySelector('#biografia');
const fecha = document.querySelector('#fecha');

let llenar_perfil = async() => {
    let autorid = await obtenerAutorid(_id);

    if (autorid) {
        imagen.src = autorid['imagen'];
        autor.innerHTML = autorid['autor'];
        biografia.innerHTML = autorid['biografia'];
        fecha.innerHTML = autorid['fecha'];

        let fecha_new = new Date(autorid['fecha']);
        let fecha_formateada = fecha_new.getUTCDate() + '-' + Number(fecha_new.getUTCMonth() + 1) + '-' + fecha_new.getFullYear();
        fecha.innerHTML = fecha_formateada;
    }
};

llenar_perfil();