'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let avatar = document.querySelector('#avatar');
let imagen = document.querySelector('#imagen');
let nombre = document.querySelector('#nombre');
let empresa = document.querySelector('#empresa');


let llenar_perfil = async () => {

    let libreriaid = await obtenerLibreriaid(id);

    if (libreriaid) {
        avatar.src = libreriaid['avatar'];
        imagen.src = libreriaid['imagen'];
        nombre.innerHTML = libreriaid['nombre'];
        empresa.innerHTML = libreriaid['empresa'];
    }
};

llenar_perfil();