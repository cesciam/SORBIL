'use strict';

const urlParams = new URLSearchParams(window.location.search);

let nombre = document.querySelector('#nombre');
let telefono = document.querySelector('#telefono');
let provincia = document.querySelector('#provincia');
let canton = document.querySelector('#canton');
let distrito = document.querySelector('#distrito');

let llenar_perfil = async () => {

    let sucursal = await obtenerDatosCorreo(correo);

    if (sucursal) {
        nombre.innerHTML = sucursal['nombre'];
        telefono.innerHTML = sucursal['telefono'];
        provincia.innerHTML = sucursal['provincia'];
        canton.innerHTML = sucursal['canton'];
        distrito.innerHTML = sucursal['distrito'];
    }
};

llenar_perfil();


