'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

let nombre = document.querySelector('#nombre');
let imagen = document.querySelector('#imagen');
let telefono = document.querySelector('#telefono');
let correo = document.querySelector('#correo');
let provincia = document.querySelector('#provincia');
let canton = document.querySelector('#canton');
let distrito = document.querySelector('#distrito');

let llenar_perfil = async () => {

    let sucursal = await obtenerLibreriaid(_id);

    if (sucursal) {
        nombre.innerHTML = sucursal['nombre'];
        imagen.src = sucursal['imagen'];
        telefono.innerHTML = sucursal['telefono'];
        correo.innerHTML = sucursal['correo'];
        provincia.innerHTML = sucursal['provincia'];
        canton.innerHTML = sucursal['canton'];
        distrito.innerHTML = sucursal['distrito'];
    }
};

llenar_perfil();


