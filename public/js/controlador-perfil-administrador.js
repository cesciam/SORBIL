'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let avatar = document.querySelector('#avatar');
let imagen = document.querySelector('#imagen');
let empresa = document.querySelector('#empresa');
let avatar_mini = document.querySelector('#avatar-mini');


let llenar_perfil = async () => {

    let libreriaid = await obtenerLibreriaid(id);

    if (libreriaid) {
        avatar.src = libreriaid['avatar'];
        imagen.src = libreriaid['imagen'];
        empresa.innerHTML = libreriaid['empresa'];
        avatar_mini.src = libreriaid['avatar'];
    }
};

llenar_perfil();