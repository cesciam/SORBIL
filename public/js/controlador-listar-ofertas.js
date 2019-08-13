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

            // Botón modificar oferta
            let celdaModificarOferta = fila.insertCell();
            let btn_modificarOferta = document.createElement('button');
            btn_modificarOferta.type = 'button';
            btn_modificarOferta.innerText = 'Modificar';
            btn_modificarOferta.dataset._id = lista_libros[i]['_id'];
            celdaModificarOferta.appendChild(btn_modificarOferta);

            // Botón modificar oferta
            let celdaEliminarOferta = fila.insertCell();
            let btn_eliminarOferta = document.createElement('button');
            btn_eliminarOferta.type = 'button';
            btn_eliminarOferta.innerText = 'Eliminar';
            btn_eliminarOferta.dataset._id = lista_libros[i]['_id'];
            celdaEliminarOferta.appendChild(btn_eliminarOferta);

            // Botón estado oferta
            let celda_estado = fila.insertCell();
            let enlace_habilitado = document.createElement('button');
            if (lista_ofertas[i]["estado"] == "Habilitado") {
                enlace_habilitado.innerText = "Habilitar";
            } else {
                enlace_habilitado.innerText = "Deshabilitar";
            }
            enlace_habilitado.href = '#';
            enlace_habilitado.addEventListener('click', function () {
                if (lista_ofertas[i]["estado"] == "Habilitado") {
                    habilitar(lista_ofertas[i]['_id'], "Desabilitado");
                } else {
                    habilitar(lista_ofertas[i]['_id'], "Habilitado");
                }
                mostrar_tabla();
            });
            celda_estado.appendChild(enlace_habilitado);

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
                let icono = document.createElement('i');
                icono.type = 'i';
                btn_modificarOferta.appendChild(icono);
                let btn_modificarOferta = document.createElement('a');
                btn_modificarOferta.type = 'a';
                
                btn_modificarOferta.dataset._id = lista_libros[i]['_id'];
                celdaModificarOferta.appendChild(btn_modificarOferta);

                // Botón modificar oferta
                let celdaEliminarOferta = fila.insertCell();
                let btn_eliminarOferta = document.createElement('button');
                btn_eliminarOferta.type = 'button';
                btn_eliminarOferta.innerText = 'Eliminar';
                btn_eliminarOferta.dataset._id = lista_libros[i]['_id'];
                celdaEliminarOferta.appendChild(btn_eliminarOferta);

                // Botón estado oferta
                let celda_estado = fila.insertCell();
                let enlace_habilitado = document.createElement('button');
                if (lista_ofertas[i]["estado"] == "Habilitado") {
                    enlace_habilitado.innerText = "Habilitar";
                } else {
                    enlace_habilitado.innerText = "Deshabilitar";
                }
                enlace_habilitado.href = '#';
                enlace_habilitado.addEventListener('click', function () {
                    if (lista_ofertas[i]["estado"] == "Habilitado") {
                        habilitar(lista_ofertas[i]['_id'], "Desabilitado");
                    } else {
                        habilitar(lista_ofertas[i]['_id'], "Habilitado");
                    }
                    mostrar_tabla();
                });
                celda_estado.appendChild(enlace_habilitado);

            }
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
