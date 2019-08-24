'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let listar_usuarios = [];
let listar_librerias = [];
let txt_filtro = document.querySelector('#txt-filtro');
const sct_librerias = document.querySelector('#lista-librerias');

let mostrar_cards = async () => {

    listar_usuarios = await obtenerUsuarios();
    listar_librerias = await obtenerLibrerias();
    console.log(listar_usuarios);

    for (let i = 0; i < listar_usuarios.length; i++) {
        if (listar_usuarios[i].estado == 'pendiente') {
            for (let j = 0; j < listar_librerias.length; j++) {
                if (listar_librerias[j].correo == listar_usuarios[i].correo) {
                    //////////////////////////////////////////////////////
                    let contenedor_card = document.createElement('div');
                    let contenedor_iconos = document.createElement('div');
                    contenedor_card.classList.add('card');

                    let header = document.createElement('header');
                    let h2 = document.createElement('h2');
                    h2.innerText = listar_librerias[j]['empresa'];

                    header.appendChild(h2);
                    //////////////////////////////////////////////////////
                    let aIconoActivar = document.createElement('a');
                    aIconoActivar.className = 'list-icon';
                    let iconActivar = document.createElement('i');
                    iconActivar.className = 'bx bxs-check-square';
                    aIconoActivar.appendChild(iconActivar);

                    let aIconoEliminar = document.createElement('a');
                    aIconoEliminar.className = 'list-icon';
                    let iconEliminiar = document.createElement('i');
                    iconEliminiar.className = 'bx bxs-x-square';
                    aIconoEliminar.appendChild(iconEliminiar);
                    //////////////////////////////////////////////////////

                    // iconActivar.id = 'habilitadoIon';
                    // aIconoActivar.href = 'ap-solicitudes.html';
                    // aIconoActivar.addEventListener('click', function () {
                    //     habilitarUsuario(listar_usuarios[i]['_id'], "habilitado");
                    //     mostrar_cards();
                    // });

                    //////////////////////////////////////////////////////
                    iconActivar.addEventListener('click', function () {
                        Swal.fire({
                            title: '¿Estás seguro deseas aceptar la solicitud?',
                            text: "Ésta acción no se puede revertir",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sí, estoy seguro'
                        }).then((result) => {
                            if (result.value) {
                                habilitarUsuario(listar_usuarios[i]['_id'], "habilitado");
                                habilitarLibreria(listar_librerias[j]['_id'], "habilitado");
                                Swal.fire(
                                    'La solicitud fue aprobada!',
                                ).then((result) => {
                                    if (result.value) {
                                        window.location.reload();
                                    }
                                });
                            }
                        })
                    });
                    //////////////////////////////////////////////////////
                    iconEliminiar.addEventListener('click', function () {
                        Swal.fire({
                            title: '¿Estás seguro deseas rechazar la solicitud?',
                            text: "Ésta acción no se puede revertir",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sí, estoy seguro'
                        }).then((result) => {
                            if (result.value) {
                                eliminarUsuario(listar_usuarios[i]['_id']);
                                eliminarLibreria(listar_librerias[j]['_id']);
                                Swal.fire(
                                    'La solicitud fue rechazada!',
                                ).then((result) => {
                                    if (result.value) {
                                        window.location.reload();
                                    }
                                });
                            }
                        })
                    });
                    //////////////////////////////////////////////////////
                    contenedor_card.appendChild(header);
                    contenedor_iconos.appendChild(aIconoActivar);
                    contenedor_iconos.appendChild(aIconoEliminar);
                    contenedor_card.appendChild(contenedor_iconos);
                    sct_librerias.appendChild(contenedor_card);
                }
            }
        }
    }
};

let filtrar_cards = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    sct_librerias.innerHTML = '';

    for (let i = 0; i < listar_usuarios.length; i++) {
        let tipoUsuario = listar_usuarios[i]['tipo_usuario'];

        if (listar_usuarios[i]['nombre'].toLowerCase().includes(filtro) || listar_usuarios[i]['correo'].toLowerCase().includes(filtro)) {
            //////////////////////////////////////////////////////
            let contenedor_card = document.createElement('div');
            let contenedor_iconos = document.createElement('div');
            contenedor_card.classList.add('card');

            let header = document.createElement('header');
            let h2 = document.createElement('h2');
            h2.innerText = listar_usuarios[i]['nombre'];

            header.appendChild(h2);
            //////////////////////////////////////////////////////
            let aIconoActivar = document.createElement('a');
            aIconoActivar.className = 'list-icon';
            let iconActivar = document.createElement('i');
            iconActivar.className = 'bx bxs-check-square';
            aIconoActivar.appendChild(iconActivar);

            let aIconoEliminar = document.createElement('a');
            aIconoEliminar.className = 'list-icon';
            let iconEliminiar = document.createElement('i');
            iconEliminiar.className = 'bx bxs-x-square';
            aIconoEliminar.appendChild(iconEliminiar);
            //////////////////////////////////////////////////////

            // iconActivar.id = 'habilitadoIon';
            // aIconoActivar.href = 'ap-solicitudes.html';
            // aIconoActivar.addEventListener('click', function () {
            //     habilitarUsuario(listar_usuarios[i]['_id'], "habilitado");
            //     mostrar_cards();
            // });

            //////////////////////////////////////////////////////
            iconActivar.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Estás seguro deseas aceptar la solicitud?',
                    text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        habilitarUsuario(listar_usuarios[i]['_id'], "habilitado");
                        Swal.fire(
                            'Librería Aprobada!',
                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });
            //////////////////////////////////////////////////////
            iconEliminiar.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Estás seguro deseas rechazar la solicitud?',
                    text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        eliminarUsuario(listar_usuarios[i]['_id']);
                        Swal.fire(
                            'Librería eliminada!',
                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });
            //////////////////////////////////////////////////////
            contenedor_card.appendChild(header);
            contenedor_iconos.appendChild(aIconoActivar);
            contenedor_iconos.appendChild(aIconoEliminar);
            contenedor_card.appendChild(contenedor_iconos);
            sct_librerias.appendChild(contenedor_card);
        }
    }
};


mostrar_cards();
txt_filtro.addEventListener('keyup', filtrar_cards);