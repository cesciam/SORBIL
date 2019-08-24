'use strict';

let registrarVenta = (pidlibreria, pidSuc, pidUser, pidLibro ) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-venta',
        responseType: 'json',
        data: {
            idlibreria: pidlibreria,
            idSuc: pidSuc,
            idUser: pidUser,
            idLibro: pidLibro
        }
    });
};

let factura =(pcorreo, pnombre, papellido, psuma)=>{
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/enviar-factura',
        responseType: 'json',
        data: {
            correo: pcorreo,
            nombre: pnombre,
            apellido: papellido,
            suma: psuma
        }
    });
}