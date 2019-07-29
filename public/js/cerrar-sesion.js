const btn_cerrar_sesion = document.querySelector('#btn-cerrar-sesion');

// let cerrar_sesion = () =>{
//     sessionStorage.clear();
//     window.location.href = '../index.html';
// }

btn_cerrar_sesion.addEventListener('click', function(){
    sessionStorage.clear();
    window.location.href = '../index.html';
    
});