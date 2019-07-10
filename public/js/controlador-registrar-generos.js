'use strict';

const input_genero = document.querySelector('#txt-genero');
const boton_enviar = document.querySelector('#btn-enviar');

let validar = (pgenero) => {

    let error = false;

    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
    }

    return error;
};

let saludar = () => {
    let genero = input_genero.value;

    let error = validar(genero);

    if (error == false) {
        // registrarGenero(genero);
        Swal.fire({ //formato json
            title: 'Se ha enviado su mensaje exitosamente',
            type: 'success',
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible'
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha enviado su mensaje',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


boton_enviar.addEventListener('click', saludar);