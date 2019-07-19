'use strict';

const input_usuario = document.querySelector('#txt-usuario');
const input_correo = document.querySelector('#txt-correo');
const input_contrasenna = document.querySelector('#txt-contrasenna');
const input_verificacion_contrasenna = document.querySelector('#txt-verificacion-contrasenna');
const input_empresa = document.querySelector('#txt-empresa');
const input_telefono = document.querySelector('#txt-telefono');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const btn_enviar = document.querySelector('#btn-enviar');

let validar = (pusuario, pcorreo, pcontrasenna, pverificacion_contrasenna, pempresa, ptelefono, pprovincia, pcanton, pdistrito) => {

    let error = false;

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

    if (pprovincia == 0) {
        error = true;
        input_provincia.classList.add('input_error');
    } else {
        input_provincia.classList.remove('input_error');
    }

    if (pcanton == 0) {
        error = true;
        input_canton.classList.add('input_error');
    } else {
        input_canton.classList.remove('input_error');
    }

    if (pdistrito == 0) {
        error = true;
        input_distrito.classList.add('input_error');
    } else {
        input_distrito.classList.remove('input_error');
    }

    return error;
};

let saludar = () => {
    let usuario = input_usuario.value;
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;
    let verificacion_contrasenna = input_verificacion_contrasenna.value;
    let empresa = input_empresa.value;
    let telefono = input_telefono.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;

    let error = validar(usuario, correo, contrasenna, verificacion_contrasenna, empresa, telefono, provincia, canton, distrito);

    if (error == false) {
        registrarLibreria(usuario, correo, contrasenna, verificacion_contrasenna, empresa, telefono, provincia, canton, distrito);
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