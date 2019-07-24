'use strict';

const btn_registrar = document.querySelector('#btn_enviar');
const tipo_tarjeta = document.querySelector('#tipo_tarjeta');

let validar_tarjeta = new Cleave('.input_numero_tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {

        if (type == 'amex'){
            tipo_tarjeta.className = 'fab fa-cc-amex';
        } else if (type == 'visa'){
            tipo_tarjeta.className = 'bx bxl-visa';
        } else if(type == 'diners'){
            tipo_tarjeta.className = 'fab fa-cc-diners-club';
        } else if(type == 'mastercard'){
            tipo_tarjeta.className = 'bx bxl-mastercard';
        }else if (type =='jcb'){
            tipo_tarjeta.className = 'fab fa-cc-jcb';
        } else if (type == 'discover'){
            tipo_tarjeta.className = 'fab fa-cc-discover';
        }else if (type == 'unknown'){
            tipo_tarjeta.className = '';
        }

    }
});


let fecha_vencimiento = new Cleave('.input_fecha', {
    date: true,
    datePattern: ['m', 'y']
});

let cvv = new Cleave('.cvv', {
    blocks: [3],
    uppercase: true
});

btn_registrar.addEventListener('click', validar_tarjeta);