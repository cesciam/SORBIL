'use strict';

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_categoria = [];
const txt_filtro = document.querySelector('#txt-filtro');


let mostrar_tabla = async () => {

    lista_categoria = await obtenerCategorias();
    console.log(lista_categoria);
    tbody.innerHTML = '';

    for (let i = 0; i < lista_categoria.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_categoria[i]['categoria'];

        let celdaIcono = fila.insertCell();
        let aIcono = document.createElement('a');
        
        let icon = document.createElement('i');
        icon.className  = 'bx bxs-edit-alt';
        aIcono.appendChild(icon);

        let celdaIconoActivar = fila.insertCell();
        let aIconoAc = document.createElement('a');
        aIconoAc.className = 'header-icon';
        let iconAc = document.createElement('i');
        iconAc.className  = 'bx bxs-check-square';
        aIconoAc.appendChild(iconAc);
        if(lista_categoria[i].estado == 'habilitado'){
            iconAc.id = 'habilitadoIon';
            aIcono.className = 'header-icon';
            iconAc.addEventListener('click', function(){
                let estado = 'desabilitado';
                cambiarEstadoCatergorias(lista_categoria[i]._id, estado);
                window.location.reload();
            });
            icon.addEventListener('click', function(){
                window.location.href = `al-modificar-categoria.html?_i=${i}`;
            });
        }else{
            aIcono.className = 'header-iconDisable';
            iconAc.addEventListener('click', function(){
                let estado = 'habilitado';
                cambiarEstadoCatergorias(lista_categoria[i]._id, estado);
                window.location.reload();
            });
        }

        celdaIcono.appendChild(aIcono);
        celdaIconoActivar.appendChild(aIconoAc);
    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_categoria.length; i++) {
        if (lista_categoria[i]['categoria'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_categoria[i]['categoria'];
        }

    }


};

mostrar_tabla();

txt_filtro.addEventListener('keyup', filtrar_tabla);