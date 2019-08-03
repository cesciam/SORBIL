'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_imagen = document.getElementById('img_uploader_portada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Constantes 
const img_uploader_imagen = document.querySelector('#portada');
const input_autor = document.querySelector('#txt-autor');
const input_biografia = document.querySelector('#txt-biografia');
const input_fecha = document.querySelector('#txt-fecha'); 

const btn_enviar = document.querySelector('#btn-enviar');

let validar = (pautor, pbiografia, pfecha) => {

    let error = false;

    if (img_uploader_imagen.src == 'http://localhost:3000/public/imgs/book-placeholder.png') {
        error = true;
        img_uploader_imagen.classList.add('input_error');

    } else {
        img_uploader_imagen.classList.remove('input_error');
    }

    if (pautor == '') {
        error = true;
        input_autor.classList.add('input_error');
    } else {
        input_autor.classList.remove('input_error');
    }

    if (pbiografia == '') {
        error = true;
        input_biografia.classList.add('input_error');
    } else {
        input_biografia.classList.remove('input_error');
    }

    if (pfecha == 'Invalid Date') {
        error = true;
        input_fecha.classList.add('input_error');
    } else {
        input_fecha.classList.remove('input_error');
    }

    return error;
};

let saludar = () => {
    let src_imagen = img_uploader_imagen.src;
    let autor = input_autor.value;
    let biografia = input_biografia.value;
    let fecha = new Date(input_fecha.value);

    let error = validar(autor, biografia, fecha);

    if (error == false) {
        registrarAutor(src_imagen, autor, biografia, fecha);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
        //Se llama a la función para limpiar el formulario
        limpiarFormulario();
    } else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};

const limpiarFormulario = () => {
    input_autor.value = '';
    input_biografia.value = '';
    input_fecha.value = '';
};



btn_enviar.addEventListener('click', saludar);
