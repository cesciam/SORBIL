const avatar = document.querySelector('#avatar-img');

let UsuarioEnSesion = JSON.parse(sessionStorage.getItem('activo'));


avatar.src = UsuarioEnSesion.avatar;
