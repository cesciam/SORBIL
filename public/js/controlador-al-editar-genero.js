'use strict';

const boton_enviar = document.querySelector('#btn-enviar');
const genero = document.querySelector('#genero');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {

    let generoid = await obtenerGeneroid(_id);

    if (generoid) {
        genero.value = generoid['genero'];
    }
};

let editar = () => {

    modificar(_id, genero.value);

}

cargar_formulario();

boton_enviar.addEventListener('click', editar);