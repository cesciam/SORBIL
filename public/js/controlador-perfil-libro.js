'use strict';

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('_id');

let titulo = document.querySelector('#title-libro');
let autor = document.querySelector('#autor');
let editorial = document.querySelector('#editorial');
let edicion = document.querySelector('#edicion');
let genero = document.querySelector('#genero');
let categoria = document.querySelector('#categoria');
let idioma = document.querySelector('#idioma');
let precio = document.querySelector('#precio');
let tipo = document.querySelector('#tipo');
let isbn = document.querySelector('#isbn');
let portada = document.querySelector('#portada');
let fecha = document.querySelector('#fecha');

let llenar_perfil = async() => {

    let libroid = await obtenerLibroid(id);
    
    if(libroid){
        titulo.innerHTML = libroid['titulo'];
        autor.innerHTML = libroid['autor'];
        editorial.innerHTML = libroid['editorial'];
        edicion.innerHTML = libroid['edicion'];
        genero.innerHTML = libroid['genero'];
        categoria.innerHTML = libroid['categoria'];
        idioma.innerHTML = libroid['idioma'];
        precio.innerHTML = libroid['precio'];
        tipo.innerHTML = libroid['tipo'];
        isbn.innerHTML = libroid['isbn'];
        portada.src = libroid['portada'];
        fecha.innerHTML = libroid['fecha'];
    }

    

};

llenar_perfil();


