'use strict';
// Constantes 
const input_nombre = document.querySelector('#txt-nombre-sucursal');
const input_telefono = document.querySelector('#txt-telefono');
const input_provincia = document.querySelector('#txt-provincia');
const input_canton = document.querySelector('#txt-canton');
const input_distrito = document.querySelector('#txt-distrito');
const btn_guardar = document.querySelector('#btn-enviar');

let sesionLibreria = JSON.parse(sessionStorage.getItem('activo'));
let sesion_libreria = sesionLibreria.correo;



const urlParams = new URLSearchParams(window.location.search);
let _i = urlParams.get('_i');
let posicion = urlParams.get('_i');


let cargarFormulario = async() => {

    let datosLibreria =  await obtenerLibreriaPorCorreo(sesion_libreria);
    posicion = parseInt(posicion);
    console.log("Print de  datoslibreria");
    console.log(datosLibreria);
    console.log("Print de  datoslibreria.sucursales");
    console.log(datosLibreria[0].sucursales);
    
    if (datosLibreria) {

        input_nombre.value = datosLibreria[0].sucursales[posicion].nombre;
        input_telefono.value = datosLibreria[0].sucursales[posicion].telefono;
        input_provincia.value = datosLibreria[0].sucursales[posicion].provincia;
        input_canton.value = datosLibreria[0].sucursales[posicion].canton;
        input_distrito.value = datosLibreria[0].sucursales[posicion].distrito;
    }
};

let validar = (pnombre, ptelefono, pprovincia, pcanton, pdistrito) => {

    let error = false;

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
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
    return error;
};

let validarTelefono = (ptelefono) => {
    
    let errorTelefono = false;
    let telefonoValido = /\d{2}-?\d{2}-?\d{2}-?\d{2}$/;

    if(!telefonoValido.test(ptelefono)){
        errorTelefono = true;
        input_telefono.classList.add('input_error');
        
    }
    else {
        input_telefono.classList.remove('input_error');
    }
    return errorTelefono;
};

let modificar = async () => {
    let nombre = input_nombre.value;
    let telefono = input_telefono.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let latitud =  await enviarLat();
    let longitud = await enviarLon();
    
    let error = validar(nombre, telefono, provincia, canton, distrito);
    let errorTelefono = validarTelefono(telefono);

    if (error == false && errorTelefono == false) {
        modificarSucursal(sesion_libreria, nombre, telefono, provincia, canton, distrito, latitud, longitud);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
       // window.location.href = `al-listar-sucursales.html`;
    } else {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revisá los campos resaltados e intentalo de nuevo'
        })
    }
};
cargarFormulario();
btn_guardar.addEventListener('click', modificar);