'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_imagen = document.getElementById('img_uploader_portada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Constantes 
const img_uploader_imagen = document.querySelector('#portada');
const input_administrador_club = document.querySelector('#txt-administrador-club');
const input_tema = document.querySelector('#txt-tema-club');
const input_telefono = document.querySelector('#txt-telefono');
const input_correo = document.querySelector('#txt-correo');
const input_categoria = document.querySelector('#txt-categoria');
const input_genero = document.querySelector('#txt-genero');
const input_fecha = document.querySelector('#txt-fecha');
const btn_enviar = document.querySelector('#btn-enviar');
const tipo = 'clubV';

let validar = (pnombre, ptema, pcorreo, ptelefono, pcategoria, pgenero, pfecha) => {

    let error = false;

    if (img_uploader_imagen.src == 'http://localhost:3000/public/imgs/book-placeholder.png') {
        error = true;
        img_uploader_imagen.classList.add('input_error');

    } else {
        img_uploader_imagen.classList.remove('input_error');
    }

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
    let src_imagen = img_uploader_imagen.src;;
    let nombre = input_administrador_club.value;
    let tema = input_tema.value;
    let correo = input_correo.value;
    let telefono = input_telefono.value;
    let categoria = input_categoria.value;
    let genero = input_genero.value;
    let fecha = new Date(input_fecha.value);

    let error = validar(tipo, nombre, tema, correo, telefono, categoria, genero, fecha);

    if (error == false) {
        registrarClub(src_imagen, tipo, nombre, tema, correo, telefono, categoria, genero, fecha);
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