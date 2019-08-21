'use strict';

let valor1 = document.querySelector('#radio1');
let valor2 = document.querySelector('#radio2');
let valor3 = document.querySelector('#radio3');
let valor4 = document.querySelector('#radio4');
let valor5 = document.querySelector('#radio5');

let usuarioActivoPerfiComentarios = JSON.parse(sessionStorage.getItem('activo'));
let idusuarioActivoPerfiComentarios = usuarioActivoPerfiComentarios._id;

const urlParametrosss = new URLSearchParams(window.location.search);

let idLibro = urlParametrosss.get('_id');

let registrarComentario5 = async () =>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Ingresa su comentario',
        inputAttributes: {
          'aria-label': 'Ingresa su comentario'
        },
        showCancelButton: true
      })
      
      if (text == '') {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Debe ingresar su comentario'
        })
      }else{
        registrarComentario(text, 5, idusuarioActivoPerfiComentarios, idLibro);
        Swal.fire({ //formato json
            title: 'Se ha registrado el comentario exitosamente',
            type: 'success',
        })
      }
}

let registrarComentario4 = async ()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Ingresa su comentario',
        inputAttributes: {
          'aria-label': 'Ingresa su comentario'
        },
        showCancelButton: true
      })
      
      if (text == '') {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Debe ingresar su comentario'
        })
      }else{
        registrarComentario(text, 4, idusuarioActivoPerfiComentarios, idLibro);
        Swal.fire({ //formato json
            title: 'Se ha registrado el comentario exitosamente',
            type: 'success',
        })
      }
}

let registrarComentario3 = async ()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Ingresa su comentario',
        inputAttributes: {
          'aria-label': 'Ingresa su comentario'
        },
        showCancelButton: true
      })
      
      if (text == '') {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Debe ingresar su comentario'
        })
      }else{
        registrarComentario(text, 3, idusuarioActivoPerfiComentarios, idLibro);
        Swal.fire({ //formato json
            title: 'Se ha registrado el comentario exitosamente',
            type: 'success',
        })
      }
}

let registrarComentario2 = async()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Ingresa su comentario',
        inputAttributes: {
          'aria-label': 'Ingresa su comentario'
        },
        showCancelButton: true
      })
      
      if (text == '') {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Debe ingresar su comentario'
        })
      }else{
          registrarComentario(text, 2, idusuarioActivoPerfiComentarios, idLibro);
        Swal.fire({ //formato json
            title: 'Se ha registrado el comentario exitosamente',
            type: 'success',
        })
      }
}

let registrarComentario1 = async()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Ingresa su comentario',
        inputAttributes: {
          'aria-label': 'Ingresa su comentario'
        },
        showCancelButton: true
      })
      
      if (text == '') {
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Debe ingresar su comentario'
        })
      }else{
          registrarComentario(text, 1, idusuarioActivoPerfiComentarios, idLibro);
        Swal.fire({ //formato json
            title: 'Se ha registrado el comentario exitosamente',
            type: 'success',
        })
      }
}




valor1.addEventListener('click', registrarComentario5);
valor2.addEventListener('click', registrarComentario4);
valor3.addEventListener('click', registrarComentario3);
valor4.addEventListener('click', registrarComentario2);
valor5.addEventListener('click', registrarComentario1);




