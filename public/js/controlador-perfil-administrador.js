'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');


let imagen = document.querySelector('#imagen');
let empresa = document.querySelector('#empresa');


let llenar_perfil = async () => {

    let libreriaid = await obtenerUsuarioId(id);

    if (libreriaid) {
        imagen.src = libreriaid['avatar'];
        empresa.innerHTML = libreriaid['empresa'];
    }
};

llenar_perfil();