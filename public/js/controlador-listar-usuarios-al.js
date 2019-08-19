'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_usuarios = [];
let txt_filtro = document.querySelector('#txt-filtro');
const sct_usuarios = document.querySelector('#lista-usuarios');


let mostrar_cards = async () => {

    lista_usuarios = await obtenerUsuarios();

    for (let i = 0; i < lista_usuarios.length; i++) {

        let tipoUsuario = lista_usuarios[i]['tipo_usuario'];
        if (tipoUsuario == 'u') {

            let contenedor_card = document.createElement('div');
            contenedor_card.classList.add('card');

            let header = document.createElement('header');
            let h2 = document.createElement('h2');
            h2.innerText = lista_usuarios[i]['nombre'];

            header.appendChild(h2);

            let contenedor_imagen = document.createElement('div');
            contenedor_imagen.classList.add('contenedor_imagen');
            let foto = document.createElement('img');
            foto.src = lista_usuarios[i]['avatar'];

            contenedor_imagen.appendChild(foto);

            let p_correo = document.createElement('p');
            p_correo.innerText = lista_usuarios[i]['correo'];

            let enlace_habilitado = document.createElement('a');
            if (lista_usuarios[i]["estado"] == "Habilitado") {
                enlace_habilitado.innerText = "Habilitado";
            } else {
                enlace_habilitado.innerText = "Deshabilitado";
            }
            enlace_habilitado.href = 'al-listar-usuarios.html';
            enlace_habilitado.addEventListener('click', function () {
                if (lista_usuarios[i]["estado"] == "Habilitado") {
                    habilitarUsuario(lista_usuarios[i]['_id'], "desabilitado");
                } else {
                    habilitarUsuario(lista_usuarios[i]['_id'], "habilitado");
                }
                mostrar_cards();
            });
            
            // let btn_estado = document.createElement('button');
            // btn_perfil.innerText = 'Ver perfil';
            // btn_perfil.dataset._id = lista_usuarios[i]['_id'];
            // btn_perfil.addEventListener('click', function () {
            //     console.log(this.dataset._id);
            //     window.location.href = `ver-perfil-usuario.html?_id=${this.dataset._id}`
            // });

            contenedor_card.appendChild(header);
            contenedor_card.appendChild(contenedor_imagen);
            contenedor_card.appendChild(p_correo);
            contenedor_card.appendChild(enlace_habilitado);
            sct_usuarios.appendChild(contenedor_card);
        }
    }
};

let filtrar_cards = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    sct_usuarios.innerHTML = '';

    for (let i = 0; i < lista_usuarios.length; i++) {
        let tipoUsuario = lista_usuarios[i]['tipo_usuario'];


        if (lista_usuarios[i]['nombre'].toLowerCase().includes(filtro) || lista_usuarios[i]['correo'].toLowerCase().includes(filtro)) {
            let contenedor_card = document.createElement('div');
            contenedor_card.classList.add('card');
            if (tipoUsuario == 'u') {
                let header = document.createElement('header');
                let h2 = document.createElement('h2');
                h2.innerText = lista_usuarios[i]['nombre'];

                header.appendChild(h2);

                let contenedor_imagen = document.createElement('div');
                contenedor_imagen.classList.add('contenedor_imagen');
                let foto = document.createElement('img');
                foto.src = lista_usuarios[i]['avatar'];

                contenedor_imagen.appendChild(foto);

                let p_correo = document.createElement('p');
                p_correo.innerText = lista_usuarios[i]['correo'];

                let enlace_habilitado = document.createElement('a');
                if (lista_usuarios[i]["estado"] == "Habilitado") {
                    enlace_habilitado.innerText = "Habilitado";
                } else {
                    enlace_habilitado.innerText = "Deshabilitado";
                }
                enlace_habilitado.href = 'ap-listar-usuarios.html';
                enlace_habilitado.addEventListener('click', function () {
                    if (lista_usuarios[i]["estado"] == "Habilitado") {
                        habilitar(lista_usuarios[i]['_id'], "Desabilitado");
                    } else {
                        habilitar(lista_usuarios[i]['_id'], "Habilitado");
                    }
                    mostrar_cards();
                });

                // let btn_perfil = document.createElement('button');
                // btn_perfil.innerText = 'Ver perfil';
                // btn_perfil.dataset._id = lista_usuarios[i]['_id'];
                // btn_perfil.addEventListener('click', function () {
                //     console.log(this.dataset._id);
                //     window.location.href = `ver-perfil-usuario.html?_id=${this.dataset._id}`
                // });

                contenedor_card.appendChild(header);
                contenedor_card.appendChild(contenedor_imagen);
                contenedor_card.appendChild(p_correo);
                contenedor_card.appendChild(enlace_habilitado);

                sct_usuarios.appendChild(contenedor_card);
            }
        }
    }
};


mostrar_cards();
txt_filtro.addEventListener('keyup', filtrar_cards);