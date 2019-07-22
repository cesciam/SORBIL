'use strict';

const input_autor = document.querySelector('#txt-autor');
const btn_enviar = document.querySelector('#btn-enviar');
const input_biografia = document.querySelector('#txt_biografia');
const input_fecha = document.querySelector('#txt_fecha'); /*fecha dufunción no es obligatoria*/

let validar = (pautor, pbiografia, pfecha) => {

    let error = false;

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
    let autor = input_autor.value;
    let biografia = input_biografia.value;
    let fecha = new Date(input_fecha.value);

    let error = validar(autor, biografia, fecha);

    if (error == false) {
        registrarAutor(autor);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


btn_enviar.addEventListener('click', saludar);


btn_enviar.addEventListener('click', saludar);