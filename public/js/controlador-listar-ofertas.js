'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');


let lista_ofertas = [];

let mostrar_tabla = async () => {

    lista_libros = await obtenerLibros();
    lista_ofertas = await obtenerOfertas();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_libros.length; i++) {

        lista_ofertas = lista_libros[i]['ofertas'];

        for (let j = 0; j < lista_ofertas.length; j++) {

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_libros[i]['titulo'];
            fila.insertCell().innerHTML = lista_libros[i]['autor'];
            fila.insertCell().innerHTML = lista_libros[i]['precio'];
            fila.insertCell().innerHTML = lista_libros[i]['tipo'];
            fila.insertCell().innerHTML = lista_ofertas[j]['porcentaje'];
            fila.insertCell().innerHTML = lista_ofertas[j]['_id'];
 

            let celdaIcono = fila.insertCell();
            let aIcono = document.createElement('a');

            let icon = document.createElement('i');
            icon.className = 'bx bxs-edit-alt';
            aIcono.appendChild(icon);

            let celdaIconoActivar = fila.insertCell();
            let aIconoActivar = document.createElement('a');
            aIconoActivar.className = 'list-icon';
            let iconActivar = document.createElement('i');
            iconActivar.className = 'bx bxs-check-square';
            aIconoActivar.appendChild(iconActivar);

            let celdaIconoEliminar = fila.insertCell();
            let aIconoEliminar = document.createElement('a');
            aIconoEliminar.className = 'habilitadoIon list-icon';
            let iconEliminiar = document.createElement('i');
            iconEliminiar.className = 'bx bxs-trash';
            aIconoEliminar.appendChild(iconEliminiar);

            if (lista_ofertas[j].estadoOferta == 'habilitado') {
                iconActivar.id = 'habilitadoIon';
                aIcono.className = 'habilitadoIon';
                iconActivar.addEventListener('click', function () {
                    let estadoOferta = 'desabilitado';
                    deshabilitar(lista_ofertas[j]._id, estadoOferta);
                    window.location.reload();
                });
                Swal.fire({
                    title: 'Añadir oferta a este libro',
                    html: '<input type="number" id="txt-porcentaje" placeholder="Ingresá el porcentaje de descuento">'
                }).then(() => {
                    let porcentaje = document.querySelector('#txt-porcentaje').value;
                    if(porcentaje > 0 && porcentaje < 101) {
                        modificarOferta(this.dataset._id, porcentaje);
                        Swal.fire({
                            title: 'Oferta registrada',
                            text:'La oferta fue registrada existosamente',
                            type: 'success'
                        })
                    } else {
                        Swal.fire({ 
                            title: 'No se ha registrado la oferta',
                            type: 'warning',
                            text: 'Revisá los campos resaltados e intentalo de nuevo'
                        })
                    }
                })
            } else {
                aIcono.className = 'list-iconDisable';
                iconActivar.addEventListener('click', function () {
                    let estadoOferta = 'habilitado';
                    habilitar(lista_ofertas[j]._id, estadoOferta);
                    window.location.reload();
                });
            }

            iconEliminiar.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Está seguro de eliminar la oferta?',
                    text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        eliminarOferta(lista_libros[i]._id, lista_libros[i].ofertas[j]._id);
                       
                        Swal.fire(
                            'Oferta eliminada!',
                            
                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });

            celdaIcono.appendChild(aIcono);
            celdaIconoActivar.appendChild(aIconoActivar);
            celdaIconoEliminar.appendChild(aIconoEliminar);

        }
    }
};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_libros.length; i++) {

        lista_ofertas = lista_libros[i]['ofertas'];
        for (let j = 0; j < lista_ofertas.length; j++) {
            if (lista_libros[i]['tipo'].toLowerCase().includes(filtro) || lista_libros[i]['genero'].toLowerCase().includes(filtro) || lista_libros[i]['categoria'].toLowerCase().includes(filtro) || lista_libros[i]['titulo'].toLowerCase().includes(filtro) || lista_libros[i]['autor'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = lista_libros[i]['titulo'];
                fila.insertCell().innerHTML = lista_libros[i]['autor'];
                fila.insertCell().innerHTML = lista_libros[i]['categoria'];
                fila.insertCell().innerHTML = lista_libros[i]['genero'];
                fila.insertCell().innerHTML = lista_libros[i]['precio'];
                fila.insertCell().innerHTML = lista_libros[i]['tipo'];
                fila.insertCell().innerHTML = lista_ofertas[j]['porcentaje'];

                // Botón modificar oferta

                let celdaModificarOferta = fila.insertCell();
                let btn_modificarOferta = document.createElement('a');
                btn_modificarOferta.type = 'a';
                btn_modificarOferta.innerText = 'Modificar';
                btn_modificarOferta.dataset._id = lista_libros[i]['_id'];
                celdaModificarOferta.appendChild(btn_modificarOferta);

                // Botón eliminar oferta
                let celdaEliminarOferta = fila.insertCell();
                let btn_eliminarOferta = document.createElement('a');
                btn_eliminarOferta.type = 'a';
                btn_eliminarOferta.innerText = 'Eliminar';
                btn_eliminarOferta.dataset._id = lista_libros[i]['_id'];
                celdaEliminarOferta.appendChild(btn_eliminarOferta);

                // Botón estado oferta
                let celda_estado = fila.insertCell();
                let enlace_habilitado = document.createElement('a');
                if (lista_ofertas[j]["estadoOferta"] == "Habilitado") {
                    enlace_habilitado.innerText = "Habilitar";
                } else {
                    enlace_habilitado.innerText = "Deshabilitar";
                }
                enlace_habilitado.href = 'ap-listar-ofertas.html';
                enlace_habilitado.addEventListener('click', function () {
                    if (lista_ofertas[j]["estadoOferta"] == "Habilitado") {
                        habilitar(lista_ofertas[j]['_id'], "Desabilitado");
                    } else {
                        habilitar(lista_ofertas[j]['_id'], "Habilitado");
                    }
                    mostrar_tabla();
                });
                celda_estado.appendChild(enlace_habilitado);

            }
        }
    }
};

let habilitar = (pid, plista_ofertas) => {

    for (let i = 0; i < plista_ofertas.length; i++) {
        if (pid == plista_ofertas[i]._id) {
            plista_ofertas[i].estadoOferta = 'Habilitado';
        }
    }

    habilitarOferta(pid, plista_ofertas);
}

let deshabilitar = (pid, plista_ofertas) => {

    for (let i = 0; i < plista_ofertas.length; i++) {
        if (pid == plista_ofertas[i]._id) {
            plista_ofertas[i].estadoOferta = 'Deshabilitado';
        }
    }

    deshabilitarOferta(pid, plista_ofertas);
}

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
