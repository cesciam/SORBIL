'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_autores = [];

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
        let btn_perfil = document.createElement('button');
        btn_perfil.type = 'button';
        btn_perfil.innerText = 'Ver perfil';
        btn_perfil.dataset._id = lista_autores[i]['_id'];

        celdaPerfil.appendChild(btn_perfil);

        btn_perfil.addEventListener('click', function(){
            window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`;

        /*boton icon edit*/

        let celdaIcono = fila.insertCell();
        let aIcono = document.createElement('a');

        let icon = document.createElement('i');
        icon.className = 'bx bxs-edit-alt';
        aIcono.appendChild(icon);
        
        /*or this?*/
        btn_modificar.addEventListener('click', function(){
        window.location.href = `ap-editar-autor.html?_id=${this.dataset._id}`;

        /*boton eliminar*/

        let celdaIconoEliminar = fila.insertCell();
        let aIconoEliminar = document.createElement('a');
        aIconoEliminar.className = 'habilitadoIon list-icon';
        let iconEliminiar = document.createElement('i');
        iconEliminiar.className = 'bx bxs-trash';
        aIconoEliminar.appendChild(iconEliminiar);

        /*boton-habilitar/deshabilitar*/
        let celdaIconoEliminar = fila.insertCell();
            let aIconoEliminar = document.createElement('a');
            aIconoEliminar.className = 'habilitadoIon list-icon';
            let iconEliminiar = document.createElement('i');
            iconEliminiar.className = 'bx bxs-trash';
            aIconoEliminar.appendChild(iconEliminiar);

            if( lista_autores[i].autor[j].estado == 'habilitado'){
                iconActivar.id = 'habilitadoIon';
                icon.addEventListener('click', function(){
                    Swal.fire({
                        title: 'Modificar información del autor',
                        html: '<input type="number" id="txt-autor" '
                    }).then(() => {
                        let input_autor = document.querySelector('#txt-autor').value;
                        if(input_autor) {

                            lista_autores[i].autor[j].porcentaje = input_porcentaje;
                            modificarAutor(lista_autores[i], lista_autores[i]._id);
                            Swal.fire({
                                title: 'Se modificó la información del autor',
                                text:'Se modificó la información del autor',
                                type: 'success'
                            })
                            window.location.reload();
                        } else {
                            Swal.fire({ 
                                title: 'No se modificó la información del autor',
                                type: 'warning',
                                text: 'Revisá los campos resaltados e intentalo de nuevo'
                            })
                        }
                    })
                });


