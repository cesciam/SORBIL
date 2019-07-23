'use strict';
const input_correo = document.querySelector('#txt-correo');
const input_contrasena = document.querySelector('#txt-contrasena');
const btn_enviar = document.querySelector('#txt-btn');

let obtenerDatos = async () => {
    let correoo = input_correo.value;
    let contrasena = input_contrasena.value;

    let error_blancos = validar(correoo, contrasena);
    let usuario_aceptado = false;

    if (!error_blancos) {
        usuario_aceptado = await validar_credenciales(correoo, contrasena);
        if (usuario_aceptado) {
            window.location.href = '../index.html';
            console.log('Sirve lol el login');
        }
    }
};

let validar = (pcorreo, pcontrasena) => {
    let error = false;

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
    }

    if (pcontrasena == '') {
        error = true;
        input_contrasena.classList.add('input_error');
    } else {
        input_contrasena.classList.remove('input_error');
    }

    return error;
};

btn_enviar.addEventListener('click', obtenerDatos);
