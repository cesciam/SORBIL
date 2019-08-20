'use strict';

let registrarCarrito = (pidUsuario, pidLibro, pidLib, pidSuc) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-carrito',
        responseType: 'json',
        data: {
            idUsuario: pidUsuario,
            idLibro:  pidLibro,
            idLib: pidLib,
            idSuc: pidSuc
        }
    });
};