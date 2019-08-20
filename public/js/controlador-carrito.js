'use strict';

const sct_libros = document.querySelector('#lista_librosCompra');
let lista_librosCompra = [];
// let txt_filtro = document.querySelector('#txt-filtro');

let mostrar_cards = async () => {

    lista_librosCompra = await obtenerLibros();

    for (let i = 0; i < lista_librosCompra.length; i++) {
        if(lista_librosCompra[i].estado == 'habilitado'){
        
            let contenedor_card = document.createElement('div');
            contenedor_card.classList.add('card');

            let header = document.createElement('header');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            h2.innerText = lista_librosCompra[i]['titulo'];
            h3.innerText = lista_librosCompra[i]['autor'];

            header.appendChild(h2);
            header.appendChild(h3);

            let contenedor_imagen = document.createElement('div');
            contenedor_imagen.classList.add('contenedor_imagen');
            let foto = document.createElement('img');
            foto.src = lista_librosCompra[i]['portada'];

            contenedor_imagen.appendChild(foto);

            let contenedor_atributo = document.createElement('div');
            contenedor_atributo.classList.add('contenedor_atributo');
            let categoria = document.createElement('p');
            let genero = document.createElement('p');
            categoria.innerText = lista_librosCompra[i]['categoria'];
            genero.innerText = lista_librosCompra[i]['genero'];

            contenedor_atributo.appendChild(categoria);
            contenedor_atributo.appendChild(genero);

            let contenedor_precio = document.createElement('div');
            contenedor_precio.classList.add('contenedor_precio');
            let precio = document.createElement('p');
            precio.innerText = lista_librosCompra[i]['precio'];

            contenedor_precio.appendChild(precio);

            let btn_perfil = document.createElement('button');
            btn_perfil.innerText = 'Ver libro';
            btn_perfil.dataset._id = lista_librosCompra[i]['_id'];
            btn_perfil.addEventListener('click', function () {
                window.location.href = `p-ver-perfil-libro.html?_id=${this.dataset._id}`;
            });

            let aIconoEliminar = document.createElement('a');
            aIconoEliminar.className = 'list-icon';
            let iconEliminiar = document.createElement('i');
            iconEliminiar.className = 'bx bxs-trash';
            aIconoEliminar.appendChild(iconEliminiar);

            // ELIMINAR OFERTAS
            iconEliminiar.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Estás seguro que desea eliminar el producto del carrito?',
                    // text: "Ésta acción no se puede revertir",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, estoy seguro'
                }).then((result) => {
                    if (result.value) {
                        eliminarCompra(lista_librosCompra[i]['_id']);

                        Swal.fire(
                            '¡Compra eliminada!',

                        ).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        });
                    }
                })
            });

            contenedor_card.appendChild(contenedor_imagen);
            contenedor_card.appendChild(header);
            contenedor_card.appendChild(contenedor_atributo);
            contenedor_card.appendChild(contenedor_precio);
            contenedor_card.appendChild(btn_perfil);
            contenedor_card.appendChild(aIconoEliminar);
            sct_libros.appendChild(contenedor_card);
        }
    }

};

// let filtrar_cards = async () => {

//     let filtro = txt_filtro.value.toLowerCase();
//     sct_libros.innerHTML = '';

//     for (let i = 0; i < lista_librosCompra.length; i++) {

//         if (lista_librosCompra[i]['titulo'].toLowerCase().includes(filtro) || lista_librosCompra[i]['categoria'].toLowerCase().includes(filtro) || lista_librosCompra[i]['genero'].toLowerCase().includes(filtro) || lista_librosCompra[i]['autor'].toLowerCase().includes(filtro))  {
//             if(lista_librosCompra[i].estado == 'habilitado'){
        
//                 let contenedor_card = document.createElement('div');
//                 contenedor_card.classList.add('card');
        
//                 let header = document.createElement('header');
//                 let h2 = document.createElement('h2');
//                 let h3 = document.createElement('h3');
//                 h2.innerText = lista_librosCompra[i]['titulo'];
//                 h3.innerText = lista_librosCompra[i]['autor'];
        
//                 header.appendChild(h2);
//                 header.appendChild(h3);
        
//                 let contenedor_imagen = document.createElement('div');
//                 contenedor_imagen.classList.add('contenedor_imagen');
//                 let foto = document.createElement('img');
//                 foto.src = lista_librosCompra[i]['portada'];
        
//                 contenedor_imagen.appendChild(foto);
        
//                 let contenedor_atributo = document.createElement('div');
//                 contenedor_atributo.classList.add('contenedor_atributo');
//                 let categoria = document.createElement('p');
//                 let genero = document.createElement('p');
//                 categoria.innerText = lista_librosCompra[i]['categoria'];
//                 genero.innerText = lista_librosCompra[i]['genero'];
        
//                 contenedor_atributo.appendChild(categoria);
//                 contenedor_atributo.appendChild(genero);
        
//                 let contenedor_precio = document.createElement('div');
//                 contenedor_precio.classList.add('contenedor_precio');
//                 let precio = document.createElement('p');
//                 precio.innerText = lista_librosCompra[i]['precio'];
        
//                 contenedor_precio.appendChild(precio);
        
//                 let btn_perfil = document.createElement('button');
//                 btn_perfil.innerText = 'Ver libro';
//                 btn_perfil.dataset._id = lista_librosCompra[i]['_id'];
//                 btn_perfil.addEventListener('click', function () {
//                     window.location.href = `p-ver-perfil-libro.html?_id=${this.dataset._id}`;
//                 });
        
//                 contenedor_card.appendChild(contenedor_imagen);
//                 contenedor_card.appendChild(header);
//                 contenedor_card.appendChild(contenedor_atributo);
//                 contenedor_card.appendChild(contenedor_precio);
//                 contenedor_card.appendChild(btn_perfil);
        
//                 sct_libros.appendChild(contenedor_card);
//             }
//         }
//     }
// };


mostrar_cards();
// txt_filtro.addEventListener('keyup', filtrar_cards);