'use strict';

const btn_perfil = document.querySelector('#ver_perfil_usuario');

usuarioActivo = JSON.parse(sessionStorage.getItem('activo'));
let _id = usuarioActivo._id;



btn_perfil.addEventListener('click', function () {
    window.location.href = `ver-perfil-usuario.html?_id=${_id}`
});


