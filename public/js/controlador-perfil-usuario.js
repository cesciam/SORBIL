'use strict';

const urlParams = new URLSearchParams(window.location.search);
let correo = urlParams.get('correo');
const txt_nombre = document.querySelector('#txt-nombre');
const txt_correo = document.querySelector('#txt-correo');


let llenar_perfil = async() => {
    let usuario = await obtenerUsuarioCorreo(correo);
    if (usuario) {
        txt_nombre.innerHTML = usuario['nombre'];
        txt_correo.innerHTML = usuario['correo'];
       
    }
};

llenar_perfil();