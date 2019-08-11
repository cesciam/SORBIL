'use strict';

const sct_libros = document.querySelector('#lista_libros');

let listarLibrosCards = async ()=>{
    let libros = await obtenerLibros();

    for (let i = 0; i < libros.length; i++) {

        let contenedor_card = document.createElement('div');
        contenedor_card.classList.add('card');

        let header = document.createElement('header');
        let h2 = document.createElement('h2');
        h2.innerText = libros[i]['titulo'];


        header.appendChild(h2);

        let contenedor_imagen = document.createElement('div');
        contenedor_imagen.classList.add('contenedor_imagen');
        let foto = document.createElement('img');
        foto.src = libros[i]['portada'];

        contenedor_imagen.appendChild(foto);

        let contenedor_atributo = document.createElement('div');
        contenedor_atributo.classList.add('contenedor_atributo');
        let categoria = document.createElement('p');
        let genero = document.createElement('p');
        categoria.innerText = libros[i]['categoria'];
        genero.innerText = libros[i]['genero'];

        contenedor_atributo.appendChild(categoria);
        contenedor_atributo.appendChild(genero);

        let contenedor_precio = document.createElement('div');
        contenedor_precio.classList.add('contenedor_precio');
        let precio = document.createElement('p');
        precio.innerText = libros[i]['precio'];

        contenedor_precio.appendChild(precio);

        let contenedor_cantidad = document.createElement('div');
        contenedor_cantidad.classList.add('contenedor_cantidad');
        let cantidad = document.createElement('p');
        let texto_cantidad = document.createElement('p');
        cantidad.innerText = libros[i].cantidad;
        texto_cantidad.innerText = 'Cantidad:  ';

        contenedor_cantidad.appendChild(texto_cantidad);
        contenedor_cantidad.appendChild(cantidad);

        let btn_agregar = document.createElement('button');
        btn_agregar.innerText = 'Agregar a mi librería';
        btn_agregar.addEventListener('click', function () {
            agregar_libros_libreria(libros[i]['_id'], libros[i].cantidad);
        });

        let btn_perfil = document.createElement('a');
        btn_perfil.innerText = 'Ver libro';
        btn_perfil.dataset._id = libros[i]['_id'];
        btn_perfil.addEventListener('click', function () {
            window.location.href = `ver-perfil-libro.html?_id=${this.dataset._id}`;
        });

        contenedor_card.appendChild(contenedor_imagen);
        contenedor_card.appendChild(header);
        contenedor_card.appendChild(contenedor_atributo);
        contenedor_card.appendChild(contenedor_cantidad);
        contenedor_card.appendChild(contenedor_precio);
        contenedor_card.appendChild(btn_agregar);
        contenedor_card.appendChild(btn_perfil);

        sct_libros.appendChild(contenedor_card);
    }
}

let agregar_libros_libreria = async(pid, pcantidad) =>{
    let usuarioActivoEnRegistroLibros = JSON.parse(sessionStorage.getItem('activo'));
    let correoUserActivo = usuarioActivoEnRegistroLibros.correo;

    let datoslibros = await obtenerDatosCorreo(correoUserActivo);


    Swal.fire({
        title: 'Cantidad de libros que deseas añadir',
        html: '<input type="number" id="txt-cantidad" placeholder="Ingresá la cantidad de libros">'
    }).then(() => {
        let cantidad = document.querySelector('#txt-cantidad').value;
        if(cantidad) {
            let resultado = validar_cantidad_libros(cantidad, pcantidad);
            if(resultado){
                Swal.fire(
                    'Error',
                    'Ingrese un valor válido.',
                    'warning'
                )
            }else{
                Swal.fire(
                    'Libros registados',
                    'Los libros se han registrado con éxito.',
                    'success'
                )
            }
            registrar_libros_libreria(correoUserActivo, pid, cantidad);
        }
    });

    
}

let validar_cantidad_libros =(pcantidad, pcantidadStockLibros)=>{
    let error = false;
    if(pcantidad < 0){
        error = true;
    }
    if(pcantidad == ''){
        error = true;
    }
    if(pcantidad > pcantidadStockLibros){
        error = true;
    }

    return error;
}

listarLibrosCards();