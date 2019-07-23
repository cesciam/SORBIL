'use strict';

let registrarCategoria = (pcategoria) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-categoria',
        responseType: 'json',
        data: {
            categoria: pcategoria
        }
    });
};

let obtenerCategorias = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-categorias',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_categorias;
    } catch (error) {
        alert(error);
    }
};