'use strict';

const boton_enviar = document.querySelector('#listar_adminal_generos');
const genero = document.querySelector('#txt-genero');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');


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