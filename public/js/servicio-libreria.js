'use strict';


let registrarLibreria = (pimagen, pusuario, pcorreo, pempresa, ptelefono, pdescripcion, pprovincia, pcanton, pdistrito, pdireccion_exacta, pdireccion_latitud, pdireccion_longitud) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libreria',
        responseType: 'json',
        data: {
            //Info de la librería
            imagen: pimagen,
            usuario: pusuario,
            correo: pcorreo,
            empresa: pempresa,
            telefono: ptelefono,
            descripcion: pdescripcion,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion_exacta: pdireccion_exacta,
            direccion_latitud: pdireccion_latitud,
            direccion_longitud: pdireccion_longitud
        }
    });
};


let registrarAdminLibreria = (pavatar, pcorreo, pcontrasena ,pnombre, pprimer_apellido, psegundo_apellido, pid, pfecha, pedad, ptipo_usuario) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-usuario',
        responseType: 'json',
        data: {
            //Info del administrador
            avatar: pavatar,
            correo: pcorreo,
            contrasena: pcontrasena,
            nombre: pnombre,
            primer_apellido: pprimer_apellido,
            segundo_apellido: psegundo_apellido,
            id: pid,
            fecha: pfecha,
            edad: pedad,
            tipo_usuario: ptipo_usuario
        }
    });
};

let obtenerLibrerias = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-librerias',
            responseType: 'json'
        });

        return response.data.lista_librerias;
    } catch (error) {
        console.log(error);
    }
};

let obtenerLibreriaid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-libreria-id/${_id}`,
            responseType: 'json'
        });

        return response.data.libreria;
    } catch (error) {
        console.log(error);
    }
};

// Funciones para obtener coordenadas de google maps
let corlatitud;
let corlongitud;

let latitud = (platitud) => {
    corlatitud = platitud;
};

let longitud = (plongitud) => {
    corlongitud = plongitud;
};

let enviarLat = () => {
    return corlatitud;
}

let enviarLon = () => {
    return corlongitud;
}