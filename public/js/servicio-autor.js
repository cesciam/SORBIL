'use strict';

let registrarAutor = (pimagen, pautor, pNacionalidad, pfechaNacimiento, pfechaDefuncion, pbiografia ) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-autor',
        responseType: 'json',
        data: {
            imagen: pimagen,
            autor: pautor,
            nacionalidad: pNacionalidad,
            fecha_nacimiento: pfechaNacimiento,
            fecha_defuncion: pfechaDefuncion,
            biografia: pbiografia,
        }
    });
};

let obtenerAutor = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-autores',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_autores;
    } catch (error) {
        alert(error);
    }
};

let obtenerAutorid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-autor-id/${_id}`,
            responseType: 'json'
        });

        return response.data.autor;
    } catch (error) {
        console.log(error);
    }
};

/*/ver/editar/cambiar estado/eliminar/*/

let modificar = (pid, pautor, pnacionalidad, pfechaNacimiento, pfechaDefuncion, pbiografia) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-contacto',
        responseType: 'json',
        data: {
            _id: pid,
            autor: pautor,
            nacionalidad: pnacionalidad,
            fecha_nacimiento: pfechaNacimiento,
            fecha_defuncion: pfechaDefuncion,
            biografia: pbiografia,

        }
    });
};

let cambiarEstadoAutor = (pid, pEstado) =>{
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-estado-autor',
        responseType: 'json',
        data: {
            _id: pid,
            estado: pEstado
        }
    });
}

let eliminarAutor = (pid, pidAutor) =>{
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar-oferta',
        responseType: 'json',
        data: {
            _id: pid,
            idAutor: pidAutor
        }
    });
}