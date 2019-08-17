'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const avatar = document.querySelector('#avatar');
const txt_nombre = document.querySelector('#txt-nombre');
const txt_correo = document.querySelector('#txt-correo');
const txt_id = document.querySelector('#txt-id');
const txt_primer_apellido = document.querySelector('#txt-primer-apellido');
const txt_segundo_apellido = document.querySelector('#txt-segundo-apellido');
const imagen = document.querySelector('#imagen');
const empresa = document.querySelector('#empresa');


let llenar_perfil = async () => {
    
    let usuario = await obtenerUsuarioId(_id);
    // let libreria = await obtenerLibreriaid(_id);

    if (usuario) {
        avatar.src = usuario['avatar'];
        txt_nombre.innerHTML = usuario['nombre'];
        txt_correo.innerHTML = usuario['correo'];
        txt_id.innerHTML = usuario['id'];
        txt_primer_apellido.innerHTML = usuario['primer_apellido'];
        txt_segundo_apellido.innerHTML = usuario['segundo_apellido'];
    } else if (libreria) {
        imagen.src = libreriaid['imagen'];
        empresa.innerHTML = libreriaid['empresa'];
    }
};

llenar_perfil();
