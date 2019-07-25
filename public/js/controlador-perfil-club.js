'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let imagen = document.querySelector('#imagen');
let nombre = document.querySelector('#txt-administrador-club');
let tema = document.querySelector('#txt-tema-club');
let correo = document.querySelector('#txt-correo');
let telefono = document.querySelector('#txt-telefono');
let categoria = document.querySelector('#txt-categoria');
let genero = document.querySelector('#txt-genero');
let fecha = document.querySelector('#txt-fecha');
let provincia = document.querySelector('#txt-provincia');
let canton = document.querySelector('#txt-canton');
let distrito = document.querySelector('#txt-distrito');
let direccion_exacta = document.querySelector('#txt-direccion-exacta');

let llenar_perfil = async () => {

    let clubid = await obtenerClubid(id);

    if (clubid) {
        imagen.src = clubid['imagen'];
        nombre.innerHTML = clubid['nombre'];
        tema.innerHTML = clubid['tema'];
        correo.innerHTML = clubid['correo'];
        telefono.innerHTML = clubid['telefono'];
        categoria.innerHTML = clubid['categoria'];
        genero.innerHTML = clubid['genero'];
        fecha.innerHTML = clubid['fecha'];
        provincia.innerHTML = clubid['provincia'];
        canton.innerHTML = clubid['canton'];
        distrito.innerHTML = clubid['distrito'];
        direccion_exacta.innerHTML = clubid['direccion_exacta'];

        let fecha_new = new Date(clubid['fecha']);
        let fecha_formateada = fecha_new.getUTCDate() + '-' + Number(fecha_new.getUTCMonth() + 1) + '-' + fecha_new.getFullYear();
        fecha.innerHTML = fecha_formateada;
    }
};

llenar_perfil();
