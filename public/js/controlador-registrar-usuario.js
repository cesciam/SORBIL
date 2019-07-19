'use strict';
// Constantes 
const input_usuario = document.querySelector('#txt-usuario');
const input_correo = document.querySelector('#txt-correo');
const input_contrasena = document.querySelector('#txt-contrasena');
const input_verf_contrasena = document.querySelector('#txt-verf-contrasena');
const input_nombre = document.querySelector('#txt-nombre');
const input_id = document.querySelector('#txt-id');
const input_primer_apellido = document.querySelector('#txt-primer-apellido');
const input_segundo_apellido = document.querySelector('#txt-segundo-apellido');
const input_sexo = document.querySelector('#txt-sexo');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const input_direccion_exacta= document.querySelector('#txt-direccion-exacta');

const btn_crear_cuenta = document.querySelector('#btn-enviar');

let validar = (pusuario, pcorreo, pcontrasena, pverfContrasena, pnombre, pid, pprimerApellido, psegundoApellido, psexo, pprovincia, pcanton, pdistrito, pdireccionExacta) => {

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

    if (pcontrasena == '') {
        error = true;
        input_contrasena.classList.add('input_error');
    } else {
        input_contrasena.classList.remove('input_error');
    }

    if (pverfContrasena == '') {
        error = true;
        input_verf_contrasena.classList.add('input_error');
    } else {
        input_verf_contrasena.classList.remove('input_error');
    }
    
    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (pid == '') {
        error = true;
        input_id.classList.add('input_error');
    } else {
        input_id.classList.remove('input_error');
    }

    if (pprimerApellido == '') {
        error = true;
        input_primer_apellido.classList.add('input_error');
    } else {
        input_primer_apellido.classList.remove('input_error');
    }

    if (psegundoApellido == '') {
        error = true;
        input_segundo_apellido.classList.add('input_error');
    } else {
        input_segundo_apellido.classList.remove('input_error');
    }

    if (psexo == '') {
        error = true;
        input_sexo.classList.add('input_error');
    } else {
        input_sexo.classList.remove('input_error');
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

    if (pdireccionExacta == '') {
        error = true;
        input_direccion_exacta.classList.add('input_error');
    } else {
        input_direccion_exacta.classList.remove('input_error');
    }

    return error;
};

let llamar = () => {
    let usuario = input_usuario.value;
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;
    let verfContrasena = input_verf_contrasena.value;
    let nombre = input_nombre.value;
    let id = input_id.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido  = input_segundo_apellido.value;
    let sexo = input_sexo.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let direccion_exacta = input_direccion_exacta.value;

    let error = validar(usuario,correo,contrasena,verfContrasena,nombre,id,primer_apellido,segundo_apellido,sexo,provincia,canton,distrito,direccion_exacta);

    if (error == false) {
        registrarUsuario(usuario,correo,contrasena,verfContrasena,nombre,id,primer_apellido,segundo_apellido,sexo,provincia,canton,distrito,direccion_exacta);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revisá los campos resaltados e intentalo de nuevo'
        })
    }
};

btn_crear_cuenta.addEventListener('click', llamar);