'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const txt_nombre = document.querySelector('#txt-nombre');
const txt_correo = document.querySelector('#txt-correo');
const avatar = document.querySelector('#avatar');
const avatar_mini = document.querySelector('#avatar-mini');


let llenar_perfil = async() => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        avatar.src = usuario['avatar'];
        avatar_mini.src = usuario['avatar'];
        txt_nombre.innerHTML = usuario['nombre'];
        txt_correo.innerHTML = usuario['correo'];    
    }
};

llenar_perfil();