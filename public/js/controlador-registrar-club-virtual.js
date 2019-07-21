'use strict';
// Constantes 
const input_administrador_club = document.querySelector('#txt-administrador-club');
const input_tema = document.querySelector('#txt-tema-club');
const input_telefono = document.querySelector('#txt-telefono');
const input_correo = document.querySelector('#txt-correo');
const input_fecha = document.querySelector('#txt-fecha');
const input_categoria = document.querySelector('#txt-categoria');
const input_genero = document.querySelector('#txt-genero');

const btn_enviar = document.querySelector('#btn-enviar');

let validar = (pnombre, ptema, ptelefono, pcorreo, pfecha, pcategoria, pgenero) => {

    let error = false;

    if (pnombre == '') {
        error = true;
        input_administrador_club.classList.add('input_error');
    } else {
        input_administrador_club.classList.remove('input_error');
    }

    if (ptema == '') {
        error = true;
        input_tema.classList.add('input_error');
    } else {
        input_tema.classList.remove('input_error');
    }

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
    }

    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
    }

    if (pcategoria == '') {
        error = true;
        input_categoria.classList.add('input_error');
    } else {
        input_categoria.classList.remove('input_error');
    }

    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
    }


    if (pfecha == 'Invalid Date') {
        error = true;
        input_fecha.classList.add('input_error');
    } else {
        input_fecha.classList.remove('input_error');
    }

    return error;
};

let llamar = () => {
    let nombre = input_administrador_club.value;
    let tema = input_tema.value;
    let telefono = input_telefono.value;
    let correo = input_correo.value;
    let fecha = new Date(input_fecha.value);
    let categoria = input_categoria.value;
    let genero = input_genero.value;

    let error = validar(nombre, tema, telefono, correo, fecha, categoria, genero);

    if (error == false) {
        registrarClub(nombre, tema, telefono, correo, fecha, categoria, genero);
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

btn_enviar.addEventListener('click', llamar);