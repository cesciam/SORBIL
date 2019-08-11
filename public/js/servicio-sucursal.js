'use strict';

let registrarSucursal = (pcorreo, pnombre, ptelefono, pprovincia, pcanton, pdistrito, pdireccion_latitud, pdireccion_longitud) =>{
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-sucursal',
        responseType: 'json',
        data: {
            correo: pcorreo,
            nombre: pnombre,
            telefono: ptelefono,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion_latitud: pdireccion_latitud,
            direccion_longitud: pdireccion_longitud
        }
    });
}

// let obtenerSucursales= async(_id) => {
   
//     try {
//         // fetch data from an url endpoint
//         const response = await axios({
//             method: 'get',
//             url: `http://localhost:4000/api/listar-sucursales/${_id}`,
//             responseType: 'json'
//         });

//         return response.data.lista_sucursales;
//     } catch (error) {
//         console.log(error);
//     }
// };


let corlatitud;
let corlongitud;

let latitud = (platitud) =>{
    corlatitud = platitud;
};

let longitud = (plongitud) =>{
    corlongitud = plongitud;
};

let enviarLat = () =>{
    return corlatitud;
}

let enviarLon = () =>{
    return corlongitud;
}