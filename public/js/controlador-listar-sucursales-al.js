'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let txt_filtro = document.querySelector('#txt-filtro');
let lista_sucursales = [];

let usuarioActivoLibreria = JSON.parse(sessionStorage.getItem('activo'));
let correo_activo_libreria = usuarioActivoLibreria.correo;

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales(correo_activo_libreria);

    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
        fila.insertCell().innerHTML = lista_sucursales[i]['provincia'];
        fila.insertCell().innerHTML = lista_sucursales[i]['canton'];
        fila.insertCell().innerHTML = lista_sucursales[i]['distrito'];


        let celdaPerfil = fila.insertCell();
        let btn_perfil = document.createElement('a');
        btn_perfil.innerText = 'Ver perfil';
        btn_perfil.href = `ver-perfil-sucursal.html?_id=${i}`;
        celdaPerfil.appendChild(btn_perfil);

        let celdaIcono = fila.insertCell();
        let aIcono = document.createElement('a');

        let icon = document.createElement('i');
        icon.className = 'bx bxs-edit-alt';
        aIcono.appendChild(icon);

        let celdaIconoActivar = fila.insertCell();
        let aIconoAc = document.createElement('a');
        aIconoAc.className = 'header-icon';
        let iconAc = document.createElement('i');
        iconAc.className = 'bx bxs-check-square';
        aIconoAc.appendChild(iconAc);

        let celdaIconoEliminar = fila.insertCell();
        let aIconoEliminar = document.createElement('a');
        aIconoEliminar.className = 'header-icon';
        let iconEliminiar = document.createElement('i');
        iconEliminiar.className = 'bx bxs-trash';
        aIconoEliminar.appendChild(iconEliminiar);

        if (lista_sucursales[i]['estado'] == 'habilitado') {
            iconAc.id = 'habilitadoIon';
            icon.addEventListener('click', function () {
                window.location.href = `modificar-sucursal-al.html?_id=${i}`;
            });
            aIcono.className = 'header-icon';
            iconAc.addEventListener('click', function () {
                lista_sucursales[i]['estado'] = 'desabilitado';

                cambiarEstadoSucursal(lista_sucursales, correo_activo_libreria);
                window.location.reload();
            });
        } else {
            aIcono.className = 'header-iconDisable';
            iconAc.addEventListener('click', function () {
                lista_sucursales[i]['estado'] = 'habilitado';

                cambiarEstadoSucursal(lista_sucursales, correo_activo_libreria);
                window.location.reload();
            });
        }

        iconEliminiar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Está seguro de eliminar la sucursal?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminarSucursal(correo_activo_libreria, lista_sucursales[i]._id);

                    Swal.fire(
                        'Sucursal eliminada!',

                    ).then((result) => {
                        if (result.value) {
                            window.location.reload();
                        }
                    });
                }
            })
        });

        celdaIcono.appendChild(aIcono);
        celdaIconoActivar.appendChild(aIconoAc);
        celdaIconoEliminar.appendChild(aIconoEliminar);

    }
};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i]['nombre'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['telefono'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['provincia'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['canton'].toLowerCase().includes(filtro) ||
            lista_sucursales[i]['distrito'].toLowerCase().includes(filtro)) {

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
            fila.insertCell().innerHTML = lista_sucursales[i]['provincia'];
            fila.insertCell().innerHTML = lista_sucursales[i]['canton'];
            fila.insertCell().innerHTML = lista_sucursales[i]['distrito'];

            let celdaModificar = fila.insertCell();
            let btn_modificar = document.createElement('a');
            btn_modificar.innerText = 'Modificar';
            btn_modificar.href = `modificar-sucursal-al.html?_id=${i}`;
            celdaModificar.appendChild(btn_modificar);

        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);