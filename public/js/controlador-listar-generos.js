'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_generos = [];
const txt_filtro = document.querySelector('#txt-filtro');


let mostrar_tabla = async () => {

    lista_generos = await obtenerGeneros();
    console.log(lista_generos);
    tbody.innerHTML = '';

    for (let i = 0; i < lista_generos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_generos[i]['genero'];

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
        if (lista_generos[i].estado == 'habilitado') {
            iconAc.id = 'habilitadoIon';
            aIcono.className = 'header-icon';
            iconAc.addEventListener('click', function () {
                let estado = 'desabilitado';
                deshabilitar(lista_generos[i]._id, estado);
                window.location.reload();
            });
            icon.addEventListener('click', function () {
                window.location.href = `al-modificar-genero.html?_id=${lista_generos[i]['_id']}`;
            });
        } else {
            aIcono.className = 'header-iconDisable';
            iconAc.addEventListener('click', function () {
                let estado = 'habilitado';
                habilitar(lista_generos[i]._id, estado);
                window.location.reload();
            });
        }

        celdaIcono.appendChild(aIcono);
        celdaIconoActivar.appendChild(aIconoAc);
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_generos.length; i++) {
        if (lista_generos[i]['genero'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_generos[i]['genero'];

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
            if (lista_generos[i].estado == 'habilitado') {
                iconAc.id = 'habilitadoIon';
                aIcono.className = 'header-icon';
                iconAc.addEventListener('click', function () {
                    let estado = 'desabilitado';
                    cambiarEstadoGeneros(lista_generos[i]._id, estado);
                    window.location.reload();
                });
                icon.addEventListener('click', function () {
                    window.location.href = `al-modificar-genero.html?_id=${lista_generos[i]['_id']}`;
                });
            } else {
                aIcono.className = 'header-iconDisable';
                iconAc.addEventListener('click', function () {
                    let estado = 'habilitado';
                    cambiarEstadoGeneros(lista_generos[i]._id, estado);
                    window.location.reload();
                });
            }

            celdaIcono.appendChild(aIcono);
            celdaIconoActivar.appendChild(aIconoAc);
        }
    }
};

mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);


