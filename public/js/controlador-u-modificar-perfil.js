'use strict';
// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_avatar = document.getElementById('img_uploader_portada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Aqui terminan las variables para subir las fotos a cloudinary

// Constantes 
const img_uploader_avatar = document.querySelector('#portada');
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
const input_direccion_exacta = document.querySelector('#txt-direccion-exacta');
const tipo_usuario = 'u';

const btn_guardar = document.querySelector('#btn-enviar');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargarFormulario = async() => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        img_uploader_avatar.src = usuario['avatar'];
        input_usuario.value = usuario['usuario'];        
        input_correo.value = usuario['correo'];
        input_nombre.value = usuario['nombre'];
        input_id.value = usuario['id'];
        input_primer_apellido.value = usuario['primer_apellido'];
        input_segundo_apellido.value = usuario['segundo_apellido'];
        input_sexo.value = usuario['sexo'];
        input_provincia.value = usuario['provincia'];
        input_canton.value = usuario['canton'];
        input_distrito.value = usuario['distrito'];
        input_direccion_exacta.value = usuario['direccion_exacta'];        
    }
};

let validar = (pusuario, pcorreo, pcontrasena, pverfContrasena, pnombre, pid, pprimerApellido, psegundoApellido, psexo, pprovincia, pcanton, pdistrito, pdireccionExacta) => {

    let error = false;

    if (img_uploader_avatar.src == 'http://localhost:3000/public/imgs/avatar-placeholder.png') {
        error = true;
        img_uploader_avatar.classList.add('input_error');

    } else {
        img_uploader_avatar.classList.remove('input_error');
    }

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
    } else if (pcontrasena != pverfContrasena) {
        error = true;
        input_contrasena.classList.add('input_error');
        input_verf_contrasena.classList.add('input_error');
    } else {
        input_contrasena.classList.remove('input_error');
    }

    if (pverfContrasena == '') {
        error = true;
        input_verf_contrasena.classList.add('input_error');
    } else if (pcontrasena != pverfContrasena) {
        error = true;
        input_contrasena.classList.add('input_error');
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

let validarCedula = (pidentificacion) => {

    let errorCedula = false;
    let cedulaValida = /^[1-9]-?\d{4}-?\d{4}$/;

    if (!cedulaValida.test(pidentificacion)) {
        errorCedula = true;
        input_id.classList.add('input_error');
    }
    else {
        input_id.classList.remove('input_error');
    }
    return errorCedula;
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

let modificarPerfilUsuario = async () => {

    let src_avatar = img_uploader_avatar.src;
    let usuario = input_usuario.value;
    let correo = input_correo.value;
    let contrasena = input_contrasena.value;
    let verfContrasena = input_verf_contrasena.value;
    let nombre = input_nombre.value;
    let id = input_id.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let sexo = input_sexo.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let direccion_exacta = input_direccion_exacta.value;
    let latitud = enviarLat();
    let longitud = enviarLon();


    let error = validar(usuario, correo, contrasena, verfContrasena, nombre, id, primer_apellido, segundo_apellido, sexo, provincia, canton, distrito, direccion_exacta);
    let errorCedula = validarCedula(id);
    let errorCorreo = validarCorreo(correo);

    if (error == false && errorCedula == false && errorCorreo == false) {
        modificarUsuario(_id, src_avatar, usuario, correo, contrasena, nombre, id, primer_apellido, segundo_apellido, sexo, provincia, canton, distrito, direccion_exacta, latitud, longitud, tipo_usuario);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
          
<<<<<<< HEAD
        window.location.href = `ver-perfil-usuario.html?_id=${_id}`;
=======
        //window.location.href = `ver-perfil-usuario.html?_id=${_id}`;
>>>>>>> fernanda
    }
    else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revisá los campos resaltados e intentalo de nuevo'
        })
    }
};

cargarFormulario();
btn_guardar.addEventListener('click', modificarPerfilUsuario);