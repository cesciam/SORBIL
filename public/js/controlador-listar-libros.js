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
        let iPerfil = document.createElement('i');
        iPerfil.className  = 'bx bx-show';
        aPerfil.dataset._id = lista_libros[i]['_id'];
        aPerfil.appendChild(iPerfil);

        let celdaIconoEditar = fila.insertCell();
        let aIconoEditar = document.createElement('a');
        let iconeditar = document.createElement('i');
        iconeditar.className  = 'bx bxs-edit-alt';
        aIconoEditar.appendChild(iconeditar);


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
            aPerfil.className = 'header-icon';
            aIconoEditar.className = 'header-icon';
            iconAc.addEventListener('click', function(){
                let estado = 'desabilitado';
                cambiarEstadoLibros(lista_libros[i]._id, estado);
                window.location.reload();
            });

            iconeditar.addEventListener('click', function(){
                window.location.href = `ap-modificar-libro.html?_i=${i}`;
            });


        }else{
            aPerfil.className = 'header-iconDisable';
            aIconoEditar.className = 'header-iconDisable';
            iconAc.addEventListener('click', function(){
                let estado = 'habilitado';
                cambiarEstadoLibros(lista_libros[i]._id, estado);
                window.location.reload();
            });
        }

        celdaIconoEditar.appendChild(aIconoEditar);
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
            //fila.insertCell().innerHTML = lista_libros[i]['genero'];
            fila.insertCell().innerHTML = lista_libros[i]['isbn'];
            fila.insertCell().innerHTML = lista_libros[i]['tipo'];
    
            let celdaPerfil = fila.insertCell();
            let aPerfil = document.createElement('a');
            let iPerfil = document.createElement('i');
            iPerfil.className  = 'bx bx-show';
            aPerfil.dataset._id = lista_libros[i]['_id'];
            aPerfil.appendChild(iPerfil);
    
            let celdaIconoEditar = fila.insertCell();
            let aIconoEditar = document.createElement('a');
            let iconeditar = document.createElement('i');
            iconeditar.className  = 'bx bxs-edit-alt';
            aIconoEditar.appendChild(iconeditar);
    
    
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
                aPerfil.className = 'header-icon';
                aIconoEditar.className = 'header-icon';
                iconAc.addEventListener('click', function(){
                    let estado = 'desabilitado';
                    cambiarEstadoLibros(lista_libros[i]._id, estado);
                    window.location.reload();
                });
    
                iconeditar.addEventListener('click', function(){
                    window.location.href = `ap-modificar-libro.html?_i=${i}`;
                });
    
    
            }else{
                aPerfil.className = 'header-iconDisable';
                aIconoEditar.className = 'header-iconDisable';
                iconAc.addEventListener('click', function(){
                    let estado = 'habilitado';
                    cambiarEstadoLibros(lista_libros[i]._id, estado);
                    window.location.reload();
                });
            }
    
            celdaIconoEditar.appendChild(aIconoEditar);
            celdaIconoActivar.appendChild(aIconoAc);
            celdaPerfil.appendChild(aPerfil);
    
            
        }

    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
