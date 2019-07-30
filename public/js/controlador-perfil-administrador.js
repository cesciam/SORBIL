'use strict';

const urlParams = new URLSearchParams(window.location.search);

let correo = urlParams.get('correo');

let avatar = document.querySelector('#avatar');
let nombre = document.querySelector('#nombre');
let correo = document.querySelector('#correo');


let llenar_perfil = async () => {

    let usuario = await obtenerUsuarioCorreo(correo);

    if (usuario) {
        avatar.innerHTML = usuario['avatar'];
        nombre.innerHTML = usuario['nombre'];
        correo.innerHTML = usuario['correo'];
    }
};
