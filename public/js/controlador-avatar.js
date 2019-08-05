const avatar = document.querySelector('#avatar-img');

let UsuarioEnSesion = JSON.parse(sessionStorage.getItem('activo'));

avatar.src = UsuarioEnSesion.avatar;

let id_ensesion = UsuarioEnSesion._id;
let btn_perfil2 = document.querySelector('#ver_perfil_usuario');


btn_perfil2.addEventListener('click', function(){
    window.location.href = `./views/ver-perfil-usuario.html?_id=${id_ensesion}`;
});
