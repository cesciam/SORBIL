'use strict';

const btn_registrar = document.querySelector('#btn_enviar');
const input_nombre = document.querySelector('#input_nombre');
const tipo_tarjeta = document.querySelector('#tipo_tarjeta');
const input_num_tarjeta = document.querySelector('#input_num_tarjeta');
const input_fecha_ven = document.querySelector('#input_fecha_ven');
const input_cvv = document.querySelector('#input_cvv');
const div_tarjeta = document.querySelector('#div-numTarjeta');

let usuarioActivo2 = JSON.parse(sessionStorage.getItem('activo'));
let id_usuario_activo = usuarioActivo2._id;

let validar = (pnombre, pnumtarjeta, pfecha, pcvv) => {
    let error = false;
    
    if (pnombre.value == ''){
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (pfecha.value == ''){
        error = true;
        input_fecha_ven.classList.add('input_error');
    } else {
        input_fecha_ven.classList.remove('input_error');
    }

    if (pnumtarjeta.value == '' || validar_tarjeta.properties.creditCardType == 'unknown'){
        error = true;
        div_tarjeta.classList.add('input_error');
    } else {
        div_tarjeta.classList.remove('input_error');
    }
    if (pcvv.value == ''){
        error = true;
        input_cvv.classList.add('input_error');
    } else {
        input_cvv.classList.remove('input_error');
    }

    return error;
}
// Validaciones de formato de tarjeta
let validar_tarjeta = new Cleave('.input_numero_tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        if (type == 'amex'){
            tipo_tarjeta.className = 'fab fa-cc-amex';
        } else if (type == 'visa'){
            tipo_tarjeta.className = 'fab fa-cc-visa-visa';
        } else if(type == 'diners'){
            tipo_tarjeta.className = 'fab fa-cc-diners-club';
        } else if(type == 'mastercard'){
            tipo_tarjeta.className = 'fab fa-cc-mastercard';
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
})

let cvv = new Cleave('.cvv', {
    blocks: [3],
    uppercase: true
});

// Aqui terminan las validaciones de formato de tarjeta


let registrarDatos = () =>{
    let nombre = input_nombre.value;
    let num_tarjeta = input_num_tarjeta.value;
    let fecha_ven = input_fecha_ven.value;
    let cvv = input_cvv.value;
    
    let resultado_validaciones = validar(input_nombre, input_num_tarjeta, input_fecha_ven, input_cvv);
    if(!resultado_validaciones){
        registrarTarjetas(id_usuario_activo, nombre, num_tarjeta, fecha_ven, cvv);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
        limpiarFormulario();
    }else{
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
}
// Función para limpiar inputs
const limpiarFormulario = () => {
    input_nombre.value = '';
    input_num_tarjeta.value = '';
    input_fecha_ven.value = '';
    input_cvv.value = '';
};

//Aqui inicia el proceso de listar las tarjetas ya registradas 

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_tarjetas = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async() => {

    lista_tarjetas = await obtenerTarjetas(id_usuario_activo);
    tbody.innerHTML = '';


    for (let i = 0; i < lista_tarjetas.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_tarjetas[i]['nombre'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['fecha_ven'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['num_tarjeta'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['cvv'];

    }
};

let filtrar_tabla = async() => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_tarjetas.length; i++) {
        if (lista_tarjetas[i]['nombre'].toLowerCase().includes(filtro) ||  lista_tarjetas[i]['fecha_ven'].toLowerCase().includes(filtro) || lista_tarjetas[i]['num_tarjeta'].toLowerCase().includes(filtro) || lista_tarjetas[i]['cvv'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_tarjetas[i]['nombre'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['fecha_ven'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['num_tarjeta'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['cvv'];
        }
    }

};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);

btn_registrar.addEventListener('click', registrarDatos);
