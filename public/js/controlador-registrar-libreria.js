'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_portada = document.getElementById('img_uploader_portada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Aqui terminan las variables para subir las fotos a cloudinary

const img_uploader_portada = document.querySelector('#portada');
const input_usuario = document.querySelector('#txt-usuario');
const input_correo = document.querySelector('#txt-correo');
const input_contrasenna = document.querySelector('#txt-contrasenna');
const input_verificacion_contrasenna = document.querySelector('#txt-verificacion-contrasenna');
const input_empresa = document.querySelector('#txt-empresa');
const input_telefono = document.querySelector('#txt-telefono');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const input_direccion_exacta = document.querySelector('#txt-direccion-exacta');
const btn_enviar = document.querySelector('#btn-enviar');

let validar = (pusuario, pcorreo, pcontrasenna, pverificacion_contrasenna, pempresa, ptelefono, pprovincia, pcanton, pdistrito, pdireccion_exacta) => {

    let error = false;

    if (img_uploader_portada.src == 'http://localhost:3000/public/imgs/book-placeholder.png') {
        error = true;
        img_uploader_portada.classList.add('input_error');
        console.log('Todo mal');
    } else {
        img_uploader_portada.classList.remove('input_error');
    }

    if (pusuario == '') {
        error = true;
        input_usuario.classList.add('input_error');
    } else {
        input_usuario.classList.remove('input_error');
    }

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
    }

    if (pcontrasenna == '') {
        error = true;
        input_contrasenna.classList.add('input_error');
    } else if (pcontrasenna != pverificacion_contrasenna) {
        error = true;
        input_contrasenna.classList.add('input_error');
    } else {
        input_contrasenna.classList.remove('input_error');
    }

    if (pverificacion_contrasenna == '') {
        error = true;
        input_verificacion_contrasenna.classList.add('input_error');
    } else if (pverificacion_contrasenna != pcontrasenna) {
        error = true;
        input_verificacion_contrasenna.classList.add('input_error');
    } else {
        input_verificacion_contrasenna.classList.remove('input_error');
    }

    if (pempresa == '') {
        error = true;
        input_empresa.classList.add('input_error');
    } else {
        input_empresa.classList.remove('input_error');
    }

    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
    }

    if (pprovincia == '') {
        error = true;
        input_provincia.classList.add('input_error');
    } else {
        input_provincia.classList.remove('input_error');
    }

    if (pcanton == '') {
        error = true;
        input_canton.classList.add('input_error');
    } else {
        input_canton.classList.remove('input_error');
    }

    if (pdistrito == '') {
        error = true;
        input_distrito.classList.add('input_error');
    } else {
        input_distrito.classList.remove('input_error');
    }

    if (pdireccion_exacta == '') {
        error = true;
        input_direccion_exacta.classList.add('input_error');
    } else {
        input_direccion_exacta.classList.remove('input_error');
    }

    return error;
};

let saludar = () => {
    let src_avatar = img_uploader_portada.src;
    let usuario = input_usuario.value;
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;
    let verificacion_contrasenna = input_verificacion_contrasenna.value;
    let empresa = input_empresa.value;
    let telefono = input_telefono.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let direccion_exacta = input_direccion_exacta.value

    let error = validar(usuario, correo, contrasenna, verificacion_contrasenna, empresa, telefono, provincia, canton, distrito, direccion_exacta);

    if (error == false) {
        registrarLibreria(src_avatar, usuario, correo, contrasenna, verificacion_contrasenna, empresa, telefono, provincia, canton, distrito, direccion_exacta);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


btn_enviar.addEventListener('click', saludar);