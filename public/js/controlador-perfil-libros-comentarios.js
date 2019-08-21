'use strict';

let valor1 = document.querySelector('#radio1');
let valor2 = document.querySelector('#radio2');
let valor3 = document.querySelector('#radio3');
let valor4 = document.querySelector('#radio4');
let valor5 = document.querySelector('#radio5');

let registrarComentario5 =() =>{
   Swal.fire({
                title: 'Escribí tu reseña',
                input: 'textarea',
            }).then(() => {
                let comentario = document.querySelector('#txt-comentario').value;
                if(comentario > 0 && comentario < 101) {
                    registrarOferta(this.dataset._id, comentario);
                    Swal.fire({
                        title: 'Oferta registrada',
                        text:'La oferta fue registrada existosamente',
                        type: 'success'
                    })
                } else {
                    Swal.fire({ 
                        title: 'No se ha registrado la oferta',
                        type: 'warning',
                        text: 'Revisá los campos resaltados e intentalo de nuevo'
                    })
                }
            })
}

let registrarComentario4 =()=>{
    Swal.fire({
        title: 'Añadir oferta a este libro',
        html: '<textarea id="txt-porcentaje" placeholder="Escribí tu reseña></textarea>'
    }).then(() => {
        let porcentaje = document.querySelector('#txt-porcentaje').value;
        if(porcentaje > 0 && porcentaje < 101) {
            registrarOferta(this.dataset._id, porcentaje);
            Swal.fire({
                title: 'Oferta registrada',
                text:'La oferta fue registrada existosamente',
                type: 'success'
            })
        } else {
            Swal.fire({ 
                title: 'No se ha registrado la oferta',
                type: 'warning',
                text: 'Revisá los campos resaltados e intentalo de nuevo'
            })
        }
    })
}

let registrarComentario3 =()=>{
    Swal.fire({
        title: 'Añadir oferta a este libro',
        html: '<textarea id="txt-porcentaje" placeholder="Escribí tu reseña></textarea>'
    }).then(() => {
        let porcentaje = document.querySelector('#txt-porcentaje').value;
        if(porcentaje > 0 && porcentaje < 101) {
            registrarOferta(this.dataset._id, porcentaje);
            Swal.fire({
                title: 'Oferta registrada',
                text:'La oferta fue registrada existosamente',
                type: 'success'
            })
        } else {
            Swal.fire({ 
                title: 'No se ha registrado la oferta',
                type: 'warning',
                text: 'Revisá los campos resaltados e intentalo de nuevo'
            })
        }
    })
}

let registrarComentario2 =()=>{
    Swal.fire({
        title: 'Añadir oferta a este libro',
        html: '<textarea id="txt-porcentaje" placeholder="Escribí tu reseña></textarea>'
    }).then(() => {
        let porcentaje = document.querySelector('#txt-porcentaje').value;
        if(porcentaje > 0 && porcentaje < 101) {
            registrarOferta(this.dataset._id, porcentaje);
            Swal.fire({
                title: 'Oferta registrada',
                text:'La oferta fue registrada existosamente',
                type: 'success'
            })
        } else {
            Swal.fire({ 
                title: 'No se ha registrado la oferta',
                type: 'warning',
                text: 'Revisá los campos resaltados e intentalo de nuevo'
            })
        }
    })
}

let registrarComentario1 =()=>{
    Swal.fire({
        title: 'Añadir oferta a este libro',
        html: '<textarea id="txt-porcentaje" placeholder="Escribí tu reseña></textarea>'
    }).then(() => {
        let porcentaje = document.querySelector('#txt-porcentaje').value;
        if(porcentaje > 0 && porcentaje < 101) {
            registrarOferta(this.dataset._id, porcentaje);
            Swal.fire({
                title: 'Oferta registrada',
                text:'La oferta fue registrada existosamente',
                type: 'success'
            })
        } else {
            Swal.fire({ 
                title: 'No se ha registrado la oferta',
                type: 'warning',
                text: 'Revisá los campos resaltados e intentalo de nuevo'
            })
        }
    })
}




valor1.addEventListener('click', registrarComentario5);
valor2.addEventListener('click', registrarComentario4);
valor3.addEventListener('click', registrarComentario3);
valor4.addEventListener('click', registrarComentario2);
valor5.addEventListener('click', registrarComentario1);




