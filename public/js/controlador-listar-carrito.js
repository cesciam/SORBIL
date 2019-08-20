'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_carrito = [];
let lista_libros = [];
let lista_librerias = [];

let UsuarioEnSesionPriv = JSON.parse(sessionStorage.getItem('activo'));
let UsuarioIdSucursalPriv = UsuarioEnSesionPriv._id;


let mostrar_tabla = async () => {

    lista_carrito = await obtenerCarrito();
    lista_libros = await obtenerLibros();
    lista_librerias = await obtenerLibrerias();

    tbody.innerHTML = '';

    for (let i = 0; i < lista_carrito.length; i++) {
        if (lista_carrito[i].idUsuario == UsuarioIdSucursalPriv) {
            for (let j = 0; j < lista_libros.length; j++) {
                if (lista_libros[j]._id == lista_carrito[i].idLibro) {
                    for (let k = 0; k < lista_librerias.length; k++) {
                        if (lista_librerias[k]._id == lista_carrito[i].idLib) {
                            for (let k = 0; k < lista_librerias.length; k++)

                            //Une los listados duplicados en un solo array
                            lista_libros[j]._id = lista_libros[j]._id.concat(lista_libros[j]._id);

                            //Sacar el total del precio
                            let precio = lista_libros[j]['precio'];
                            precio = precio.substr(1)
                            let precioInt = parseFloat(precio, 10);
                            var numeros = [precioInt, precioInt, precioInt];
                            var sumatoria = numeros.reduce(function (a, b) { return a + b; }, 0);

                                
                            let fila = tbody.insertRow();
                            fila.insertCell().innerHTML = lista_libros[j]['titulo'];
                            fila.insertCell().innerHTML = lista_libros[j]['precio'];
                            fila.insertCell().innerHTML = lista_librerias[k]['empresa'];
                            fila.insertCell().innerHTML = [sumatoria];

                            let celdaIconoEliminar = fila.insertCell();
                            let aIconoEliminar = document.createElement('a');
                            aIconoEliminar.className = 'list-icon';
                            let iconEliminiar = document.createElement('i');
                            iconEliminiar.className = 'bx bxs-trash';
                            aIconoEliminar.appendChild(iconEliminiar);

                            iconEliminiar.addEventListener('click', function () {
                                Swal.fire({
                                    title: '¿Está seguro de eliminar el carrito?',
                                    // text: "Ésta acción no se puede revertir",
                                    type: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Sí, estoy seguro'
                                }).then((result) => {
                                    if (result.value) {
                                        eliminarProductoCarrito(lista_carrito[i]._id);
                                        Swal.fire(
                                            'Carrito eliminado!',
                                            'success'
                                        ).then((result) => {
                                            if (result.value) {
                                                window.location.reload();
                                            }
                                        });
                                    }
                                })
                            });

                            celdaIconoEliminar.appendChild(aIconoEliminar);
                        }
                    }
                }
            }
        }
    }
};

mostrar_tabla();
