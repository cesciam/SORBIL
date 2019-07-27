'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let imagen = document.querySelector('#imagen');
let tema = document.querySelector('#tema');
let correo = document.querySelector('#correo');
let telefono = document.querySelector('#telefono');
let categoria = document.querySelector('#categoria');
let genero = document.querySelector('#genero');
let fecha = document.querySelector('#fecha');

let llenar_perfil = async () => {

    let clubid = await obtenerClubid(id);

    if (clubid) {
        imagen.src = clubid['imagen'];
        tema.innerHTML = clubid['tema'];
        correo.innerHTML = clubid['correo'];
        telefono.innerHTML = clubid['telefono'];
        categoria.innerHTML = clubid['categoria'];
        genero.innerHTML = clubid['genero'];
        fecha.innerHTML = clubid['fecha'];

        let fecha_new = new Date(clubid['fecha']);
        let fecha_formateada = fecha_new.getUTCDate() + '-' + Number(fecha_new.getUTCMonth() + 1) + '-' + fecha_new.getFullYear();
        fecha.innerHTML = fecha_formateada;
    }

    let clubid = await obtenerClubid(id);

};

llenar_perfil();
