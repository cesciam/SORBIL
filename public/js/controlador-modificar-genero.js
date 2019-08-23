'use strict';

const boton_enviar = document.querySelector('#listar_adminal_generos');
const genero = document.querySelector('#txt-genero');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let validar = (pgenero) => {

    let error = false;

    if (pgenero == '') {
        error = true;
        genero.classList.add('input_error');
    } else {
        genero.classList.remove('input_error');
    }

    return error;
};

let cargar_formulario = async () => {

    let generoid = await obtenerGeneroid(_id);

    if (generoid) {
        genero.value = generoid['genero'];
    }
};

let editar = () => {

    modificarGenero(_id, genero.value);
    
}

cargar_formulario();
boton_enviar.addEventListener('click', editar);