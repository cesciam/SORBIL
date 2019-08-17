'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const avatar = document.querySelector('#avatar');
const txt_nombre = document.querySelector('#txt-nombre');
const txt_correo = document.querySelector('#txt-correo');
const txt_usuario = document.querySelector('#txt-usuario');
const txt_id = document.querySelector('#txt-id');
const txt_primer_apellido = document.querySelector('#txt-primer-apellido');
const txt_segundo_apellido = document.querySelector('#txt-segundo-apellido');
const txt_provincia = document.querySelector('#txt-provincia');
const txt_canton = document.querySelector('#txt-canton');
const txt_distrito = document.querySelector('#txt-distrito');
const btn_modificar = document.querySelector('#btn-modificar');


let llenar_perfil = async () => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        avatar.src = usuario['avatar'];
        txt_nombre.innerHTML = usuario['nombre'];
        txt_correo.innerHTML = usuario['correo'];
        txt_usuario.innerHTML = usuario['usuario'];
        txt_id.innerHTML = usuario['id'];
        txt_primer_apellido.innerHTML = usuario['primer_apellido'];
        txt_segundo_apellido.innerHTML = usuario['segundo_apellido'];
        txt_provincia.innerHTML = usuario['provincia'];
        txt_canton.innerHTML = usuario['canton'];
        txt_distrito.innerHTML = usuario['distrito'];

    }
};

btn_modificar.addEventListener('click', function () {
    window.location.href = `modificar-perfil-usuario.html?_id=${_id}`;
});

llenar_perfil();