'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let avatar = document.querySelector('#avatar');
let empresa = document.querySelector('#empresa');
let descripcion = document.querySelector('#descripcion');
let telefono = document.querySelector('#telefono');
let correo = document.querySelector('#correo');
let provincia = document.querySelector('#provincia');
let canton = document.querySelector('#canton');
let distrito = document.querySelector('#distrito');
let direccion_exacta = document.querySelector('#direccion-exacta');

let llenar_perfil = async () => {

    let libreriaid = await obtenerLibreriaid(id);

    if (libreriaid) {
        avatar.src = libreriaid['avatar'];
        empresa.innerHTML = libreriaid['empresa'];
        descripcion.innerHTML = libreriaid['descripcion'];
        telefono.innerHTML = libreriaid['telefono'];
        correo.innerHTML = libreriaid['correo'];
        provincia.innerHTML = libreriaid['provincia'];
        canton.innerHTML = libreriaid['canton'];
        distrito.innerHTML = libreriaid['distrito'];
        direccion_exacta.innerHTML = libreriaid['direccion_exacta'];
    }
};

llenar_perfil();


