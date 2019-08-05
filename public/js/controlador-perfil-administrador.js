'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');


let avatar = document.querySelector('#avatar');
let nombre = document.querySelector('#nombre');
let correo = document.querySelector('#correo');


let llenar_perfil = async () => {

    let libreriaid = await obtenerUsuarioId(id);

    if (libreriaid) {
        avatar.src = libreriaid['avatar'];
        nombre.innerHTML = libreriaid['nombre'];
        correo.innerHTML = libreriaid['correo'];
    }
};

llenar_perfil();
