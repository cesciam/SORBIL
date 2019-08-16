// Constantes 
'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_imagen = document.getElementById('img_uploader_portada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Constantes
const boton_enviar = document.querySelector('#listar_adminal_clubes');
const img_uploader_imagen = document.querySelector('#portada');
const input_administrador_club = document.querySelector('#txt-administrador-club');
const input_tema = document.querySelector('#txt-tema-club');
const input_telefono = document.querySelector('#txt-telefono');
const input_correo = document.querySelector('#txt-correo');
const input_categoria = document.querySelector('#txt-categoria');
const input_genero = document.querySelector('#txt-genero');
const input_fecha = document.querySelector('#txt-fecha');
const input_hora = document.querySelector('#txt-hora');
const input_frecuencia = document.querySelector('#txt-frecuencia');
const input_descripcion = document.querySelector('#txt-descripcion');
const tipo = 'Club Virtual';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let validar = (pnombre, ptema, pcorreo, ptelefono, pcategoria, pgenero, pfecha, phora, pfrecuencia, pdescripcion) => {

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

    if (phora == '') {
        error = true;
        input_hora.classList.add('input_error');
    } else {
        input_hora.classList.remove('input_error');
    }

    if (pfrecuencia == '') {
        error = true;
        input_frecuencia.classList.add('input_error');
    } else {
        input_frecuencia.classList.remove('input_error');
    }

    if (pdescripcion == '') {
        error = true;
        input_descripcion.classList.add('input_error');
    } else {
        input_descripcion.classList.remove('input_error');
    }

    return error;
};

let validarCorreo = (pcorreo) => {

    let errorCorreo = false;
    let correoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!correoValido.test(pcorreo)) {
        errorCorreo = true;
        input_correo.classList.add('input_error');
    }
    else {
        input_correo.classList.remove('input_error');
    }
    return errorCorreo;
};

let validarTelefono = (ptelefono) => {

    let errorTelefono = false;
    let telefonoValido = /\d{2}-?\d{2}-?\d{2}-?\d{2}$/;

    if (!telefonoValido.test(ptelefono)) {
        errorTelefono = true;
        input_telefono.classList.add('input_error');

    }
    else {
        input_telefono.classList.remove('input_error');
    }
    return errorTelefono;
};

let validarFecha = (pfecha) => {

    let hoy = new Date();
    let errorFecha = false;

    if (pfecha < hoy || pfecha == 'Invalid Date') {
        errorFecha = true;
        input_fecha.classList.add('input_error');
    }
    else {
        input_fecha.classList.remove('input_error');
    }
    return errorFecha;
};

let cargar_formulario = async () => {

    let clubid = await obtenerClubid(_id);

    if (clubid) {
        img_uploader_imagen.src = clubid['imagen'];
        input_administrador_club.value = clubid['nombre'];
        input_tema.value = clubid['tema'];
        input_telefono.value = clubid['telefono'];
        input_correo.value = clubid['correo'];
        input_categoria.value = clubid['categoria'];
        input_genero.value = clubid['genero'];
        let fecha_original = new Date(clubid['fecha']);

        let mes = fecha_original.getUTCMonth() + 1;
        if (mes < 10) {
            mes = '0' + mes;
        }

        let dia = fecha_original.getDate();
        if (dia < 10) {
            dia = '0' + dia;
        }

        input_fecha.value = fecha_original.getFullYear() + '-' + mes + '-' + dia;
        input_hora.value = clubid['hora'];
        input_frecuencia.value = clubid['frecuencia'];
        input_descripcion.value = clubid['descripcion'];
    }
};

let editar = () => {

    modificarClub(_id, img_uploader_imagen.src, input_administrador_club.value, input_tema.value, input_telefono.value, input_correo.value, input_categoria.value, input_genero.value, input_fecha.value, input_hora.value, input_frecuencia.value, input_descripcion.value);

}

cargar_formulario();
boton_enviar.addEventListener('click', editar);