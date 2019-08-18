'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_autores = [];
const txt_filtro = document.querySelector('#txt-filtro');

/*boton modificar autor-habilitar/dehabilitar*/
const btn_modificar = document.querySelector('#btn-modificar');
const btn_estado = document.querySelector('#btn-estado');

const btn_eliminar = document.querySelector('#btn-eliminar');

let mostrar_tabla = async () => {
    lista_autores = await obtenerAutor();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_autores[i]['autor'];
    
        let celdaPerfil = fila.insertCell();
        let aPerfil = document.createElement('a');
        let iPerfil = document.createElement('i');
        iPerfil.className  = 'bx bx-show';
        aPerfil.dataset._id = lista_autores[i]['_id'];
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

        let celdaIconoEliminar = fila.insertCell();
        let aIconoEliminar = document.createElement('a');
        aIconoEliminar.className = 'header-icon';
        let iconEliminiar = document.createElement('i');
        iconEliminiar.className  = 'bx bxs-trash';
        aIconoEliminar.appendChild(iconEliminiar);

        if(lista_autores[i].estado == 'habilitado'){
            iconAc.id = 'habilitadoIon';
            aPerfil.addEventListener('click', function () {
                window.location.href = `ver-perfil-autor?_id=${this.dataset._id}`;
            });
            aPerfil.className = 'header-icon';
            aIconoEditar.className = 'header-icon';
            iconAc.addEventListener('click', function(){
                let estado = 'desabilitado';
                cambiarEstadoAutor(lista_autores[i]._id, estado);
                window.location.reload();
            });

            iconeditar.addEventListener('click', function(){
                window.location.href = `ap-editar-autor.html?_i=${i}`;
            });


        }else{
            aPerfil.className = 'header-iconDisable';
            aIconoEditar.className = 'header-iconDisable';
            iconAc.addEventListener('click', function(){
                let estado = 'habilitado';
                cambiarEstadoAutor(lista_autores[i]._id, estado);
                window.location.reload();
            });
        }

        aIconoEliminar.addEventListener('click', function(){
            Swal.fire({
                title: 'Está seguro de eliminar el autor?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminarAutor(lista_autores[i]._id);

                    Swal.fire(
                        'Autor eliminado!',
                        'success'
                    ).then((result) => {
                        if (result.value) {
                            window.location.reload();
                        }
                    });
                }
            })
        });

        celdaIconoEditar.appendChild(aIconoEditar);
        celdaIconoActivar.appendChild(aIconoAc);
        celdaPerfil.appendChild(aPerfil);
        celdaIconoEliminar.appendChild(aIconoEliminar);       
    }
}

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    lista_autores = await obtenerAutor();
    tbody.innerHTML = '';
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        if (lista_autores[i]["autor"].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_autores[i]['autor'];
        
            let celdaPerfil = fila.insertCell();
            let aPerfil = document.createElement('a');
            let iPerfil = document.createElement('i');
            iPerfil.className  = 'bx bx-show';
            aPerfil.dataset._id = lista_autores[i]['_id'];
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
    
            let celdaIconoEliminar = fila.insertCell();
            let aIconoEliminar = document.createElement('a');
            aIconoEliminar.className = 'header-icon';
            let iconEliminiar = document.createElement('i');
            iconEliminiar.className  = 'bx bxs-trash';
            aIconoEliminar.appendChild(iconEliminiar);
    
            if(lista_autores[i].estado == 'habilitado'){
                iconAc.id = 'habilitadoIon';
                aPerfil.addEventListener('click', function () {
                    
                    window.location.href = `ap-editar-autor.html?_id=${this.dataset._id}`;
                });
                aPerfil.className = 'header-icon';
                aIconoEditar.className = 'header-icon';
                iconAc.addEventListener('click', function(){
                    let estado = 'desabilitado';
                    cambiarEstadoAutor(lista_autores[i]._id, estado);
                    window.location.reload();
                });
    
                iconeditar.addEventListener('click', function(){
                    window.location.href = `ap-editar-autor.html?_i=${i}`;
                });
    
    
            }else{
                aPerfil.className = 'header-iconDisable';
                aIconoEditar.className = 'header-iconDisable';
                iconAc.addEventListener('click', function(){
                    let estado = 'habilitado';
                    cambiarEstadoAutor(lista_autores[i]._id, estado);
                    window.location.reload();
                });
            }
    
            aIconoEliminar.addEventListener('click', function(){
                Swal.fire({
                    title: 'Está seguro de eliminar el autor?',
                    text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        eliminarAutor(lista_autores[i]._id);
    
                        Swal.fire(
                            'Autor eliminado!',
                            'success'
                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });
    
            celdaIconoEditar.appendChild(aIconoEditar);
            celdaIconoActivar.appendChild(aIconoAc);
            celdaPerfil.appendChild(aPerfil);
            celdaIconoEliminar.appendChild(aIconoEliminar);
        }

    }


};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);