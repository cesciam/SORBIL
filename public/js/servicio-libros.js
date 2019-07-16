'use strict';

let registrarLibro = (ptitulo, pautor, pedicion, peditorial, pfecha, pcategoria, pgenero, pidioma, pprecio, ptipo, pisbn) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libro',
        responseType: 'json',
        data: {
            titulo: ptitulo,
            autor: pautor,
            edicion: pedicion,
            editorial: peditorial,
            fecha: pfecha,
            categoria: pcategoria,
            genero: pgenero,
            idioma: pidioma,
            precio: pprecio,
            tipo: ptipo,
            isbn: pisbn
        }
    });
};