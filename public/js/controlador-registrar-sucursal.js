'use strict';
// Constantes 
const input_nombre = document.querySelector('#txt-nombre-sucursal');
const input_telefono = document.querySelector('#txt-telefono');
const input_correo = document.querySelector('#txt-correo');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const btn_crear_sucursal = document.querySelector('#btn-enviar');

let validar = (pnombre, ptelefono, pcorreo, pprovincia, pcanton, pdistrito) => {

    let error = false;

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
    }

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
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
    return error;
};

let llamar = () => {
    let nombre = input_nombre.value;
    let telefono = input_telefono.value;
    let correo = input_correo.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    
    let error = validar(nombre, telefono, correo, provincia, canton, distrito);

    if (error == false) {
        registrarSucursal(nombre, telefono, correo, provincia, canton, distrito);
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

btn_crear_sucursal.addEventListener('click', llamar);