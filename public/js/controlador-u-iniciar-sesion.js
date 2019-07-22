'use strict';
const input_correo = document.querySelector('#txt-correo');
const input_contrasena = document.querySelector('#txt-contrasena');
const btn_enviar = document.querySelector('#btn-enviar');


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
};

let obtenerDatos = () => {
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;

    let error_blancos = validar(correo, contrasena);
    usuario_aceptado = false;

    if (!error_blancos) {
        usuario_aceptado = validar_credenciales(correo, contrasena);
        if (usuario_aceptado) {
            window.location.href = 'u-inicio-sesion.html';
        }
    }
};

btn_enviar.addEventListener('click', obtenerDatos);
