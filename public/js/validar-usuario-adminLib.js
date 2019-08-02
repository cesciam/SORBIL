'use strict';

let usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
//let tipo_usuario = usuarioActivo.tipo_usuario;

if(usuarioActivo == null){
    window.location.href = 'u-iniciar-sesion.html';

}


