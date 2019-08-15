'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async () => {

    lista_libros = await obtenerLibros();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_libros.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_libros[i]['titulo'];
        fila.insertCell().innerHTML = lista_libros[i]['autor'];
        fila.insertCell().innerHTML = lista_libros[i]['categoria'];
        //fila.insertCell().innerHTML = lista_libros[i]['genero'];
        fila.insertCell().innerHTML = lista_libros[i]['isbn'];
        fila.insertCell().innerHTML = lista_libros[i]['tipo'];

        let celdaPerfil = fila.insertCell();
        let aPerfil = document.createElement('a');
        aPerfil.className = 'header-icon';
        let iPerfil = document.createElement('i');
        iPerfil.className  = 'bx bx-show';
        aPerfil.dataset._id = lista_libros[i]['_id'];
        aPerfil.appendChild(iPerfil);

        let celdaIconoActivar = fila.insertCell();
        let aIconoAc = document.createElement('a');
        aIconoAc.className = 'header-icon';
        let iconAc = document.createElement('i');
        iconAc.className  = 'bx bxs-check-square';
        aIconoAc.appendChild(iconAc);

        if(lista_libros[i].estado == 'habilitado'){
            iconAc.id = 'habilitadoIon';
            aPerfil.addEventListener('click', function () {
                window.location.href = `ver-perfil-libro.html?_id=${this.dataset._id}`;
            });
            iconAc.addEventListener('click', function(){
                let estado = 'desabilitado';
                cambiarEstadoLibros(lista_libros[i]._id, estado);
                window.location.reload();
            });


        }else{
            aPerfil.className = 'header-iconDisable';
            iconAc.addEventListener('click', function(){
                let estado = 'habilitado';
                cambiarEstadoLibros(lista_libros[i]._id, estado);
                window.location.reload();
            });
        }

        


        
        

        celdaIconoActivar.appendChild(aIconoAc);
        celdaPerfil.appendChild(aPerfil);

        
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_libros.length; i++) {
        if (lista_libros[i]['tipo'].toLowerCase().includes(filtro) || lista_libros[i]['genero'].toLowerCase().includes(filtro) || lista_libros[i]['categoria'].toLowerCase().includes(filtro) || lista_libros[i]['titulo'].toLowerCase().includes(filtro) || lista_libros[i]['autor'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_libros[i]['titulo'];
            fila.insertCell().innerHTML = lista_libros[i]['autor'];
            fila.insertCell().innerHTML = lista_libros[i]['categoria'];
            fila.insertCell().innerHTML = lista_libros[i]['genero'];
            fila.insertCell().innerHTML = lista_libros[i]['isbn'];
            fila.insertCell().innerHTML = lista_libros[i]['tipo'];

            let celdaPerfil = fila.insertCell();
            let iconPerfil = document.createElement('a');
            iconPerfil.className = 'header-icon';
            let iconPerfilI = document.createElement('i');
            iconPerfil.className  = 'bx bx-show';
            iconPerfil.dataset._id = lista_libros[i]['_id'];
            
            iconPerfil.appendChild(iconPerfilI);
            celdaPerfil.appendChild(iconPerfil);

            iconPerfil.addEventListener('click', function () {
                window.location.href = `ver-perfil-libro.html?_id=${this.dataset._id}`;
            });
        }

    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
