'use strict';

let registrarUsuario = (pavatar, pusuario, pcorreo, pcontrasena, pverfContrasena, pnombre, pid, pprimerApellido, psegundoApellido, psexo, pprovincia, pcanton, pdistrito, pdireccionExacta) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-usuario',
        responseType: 'json',
        data: {
            avatar: pavatar,
            usuario: pusuario,
            correo: pcorreo,
            contrasena: pcontrasena,
            verfContrasena: pverfContrasena,
            nombre: pnombre,
            id: pid,
            sexo: psexo,
            primer_apellido: pprimerApellido,
            segundo_apellido: psegundoApellido,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion_exacta: pdireccionExacta
        }
    });
};

let validar_credenciales = (pcorreo, pcontrasena) => {
    let respuesta = '';
    let peticion = axios({
        method: 'post',
        url: 'http://localhost:4000/api/validar-credenciales',
        responseType: 'json',
        data: {
            correo: pcorreo,
            contrasena: pcontrasena
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('nombre', tipo_usuario.usuario.nombre);
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};


let obtenerUsuarios = async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-usuarios',
            responseType: 'json'
        });

        return response.data.lista_usuarios;
    } catch (error) {
        console.log(error);
    }
};