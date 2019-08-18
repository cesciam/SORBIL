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
const input_hora = document.querySelector('#txt-hora');
const input_frecuencia = document.querySelector('#txt-frecuencia');
// const input_provincia = document.querySelector('#txt-provincia');
// const input_canton = document.querySelector('#txt-canton');
// const input_distrito = document.querySelector('#txt-distrito');
const input_direccion_exacta = document.querySelector('#txt-direccion-exacta');
const input_descripcion = document.querySelector('#txt-descripcion');
const tipo = 'Club Presencial';

const btn_enviar = document.querySelector('#btn-enviar');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

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
        input_direccion_exacta.value = clubid['direccion_exacta'];
        input_descripcion.value = clubid['descripcion'];
    }
};


let validar = (pnombre, ptema, pcorreo, ptelefono, pcategoria, pgenero, pfecha, phora, pfrecuencia, pdescripcion, pdireccion_exacta) => {

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

    // if (pprovincia == '') {
    //     error = true;
    //     input_provincia.classList.add('input_error');
    // } else {
    //     input_provincia.classList.remove('input_error');
    // }

    // if (pcanton == '') {
    //     error = true;
    //     input_canton.classList.add('input_error');
    // } else {
    //     input_canton.classList.remove('input_error');
    // }

    // if (pdistrito == '') {
    //     error = true;
    //     input_distrito.classList.add('input_error');
    // } else {
    //     input_distrito.classList.remove('input_error');
    // }

    if (pdireccion_exacta == '') {
        error = true;
        input_direccion_exacta.classList.add('input_error');
    } else {
        input_direccion_exacta.classList.remove('input_error');
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


let modificarClub = async () => {

    //variables del administrador
    let src_imagen = img_uploader_imagen.src;;
    let nombre = input_administrador_club.value;
    let tema = input_tema.value;
    let correo = input_correo.value;
    let telefono = input_telefono.value;
    let categoria = input_categoria.value;
    let genero = input_genero.value;
    let fecha = new Date(input_fecha.value);
    let hora = input_hora.value;
    let frecuencia = input_frecuencia.value;
    let direccion_exacta = input_direccion_exacta.value;
    let descripcion = input_descripcion.value;


    let error = validar(nombre, tema, correo, telefono, categoria, genero, fecha, hora, frecuencia, descripcion, direccion_exacta);
    let errorCorreo = validarCorreo(correo);
    let errorTelefono = validarTelefono(telefono);
    let errorFecha = validarFecha(fecha);

    if (error == false && errorCorreo == false && errorTelefono == false && errorFecha == false) {
        // let estado = 'habilitado';
        modificarClubPresencial(_id, src_imagen, tipo, nombre, tema, correo, telefono, categoria, genero, fecha, hora, frecuencia, descripcion, direccion_exacta);
        Swal.fire({ //formato json
            title: 'Se ha modificado la información exitosamente',
            type: 'success',
        }).then((result) => {
            if (result.value) {
                window.location.href = `al-listar-clubes.html?_id=${_id}`;
            }
        });
        //Se llama a la función para limpiar el formulario

    } else {
        Swal.fire({ //formato json
            title: 'No se ha modificado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
};

cargar_formulario();
boton_enviar.addEventListener('click', modificarClub);