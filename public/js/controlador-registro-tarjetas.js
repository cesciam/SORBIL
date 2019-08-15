'use strict';



let usuarioActivo2 = JSON.parse(sessionStorage.getItem('activo'));
let id_usuario_activo = usuarioActivo2._id;

let btn_registro = document.querySelector('#registro-tarjetas');

//Aqui inicia el proceso de listar las tarjetas ya registradas 

const tbody = document.querySelector('#tabla-filtrado tbody');
let lista_tarjetas = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async() => {

    lista_tarjetas = await obtenerTarjetas(id_usuario_activo);
    tbody.innerHTML = '';


    for (let i = 0; i < lista_tarjetas.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_tarjetas[i]['nombre'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['fecha_ven'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['num_tarjeta'];
        fila.insertCell().innerHTML = lista_tarjetas[i]['cvv'];

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

        if(lista_tarjetas[i]['estado'] == 'habilitado'){
            iconAc.id = 'habilitadoIon';
            icon.addEventListener('click', function(){
                window.location.href = `p-tarjetas-modificar.html?_i=${i}`;
            });
            aIcono.className = 'header-icon';
            iconAc.addEventListener('click', function(){
                lista_tarjetas[i]['estado'] = 'desabilitado';

                cambiarEstadoTarjetas(lista_tarjetas, id_usuario_activo);
                window.location.reload();
            });
        }else{
            aIcono.className = 'header-iconDisable';
            iconAc.addEventListener('click', function(){
                lista_tarjetas[i]['estado'] = 'habilitado';

                cambiarEstadoTarjetas(lista_tarjetas, id_usuario_activo);
                window.location.reload();
            });
        }

        celdaIcono.appendChild(aIcono);
        celdaIconoActivar.appendChild(aIconoAc);

        



    }
};

let filtrar_tabla = async() => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_tarjetas.length; i++) {
        if (lista_tarjetas[i]['nombre'].toLowerCase().includes(filtro) ||  lista_tarjetas[i]['fecha_ven'].toLowerCase().includes(filtro) || lista_tarjetas[i]['num_tarjeta'].toLowerCase().includes(filtro) || lista_tarjetas[i]['cvv'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_tarjetas[i]['nombre'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['fecha_ven'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['num_tarjeta'];
            fila.insertCell().innerHTML = lista_tarjetas[i]['cvv'];

            let celdaIcono = fila.insertCell();
            let aIcono = document.createElement('a');
            aIcono.className = 'header-icon';
            let icon = document.createElement('i');
            icon.className  = 'bx bxs-edit-alt';
            aIcono.appendChild(icon);

            let celdaIconoActivar = fila.insertCell();
            let aIconoAc = document.createElement('a');
            aIconoAc.className = 'header-icon';
            let iconAc = document.createElement('i');
            iconAc.className  = 'bx bxs-check-square';
            aIconoAc.appendChild(iconAc);

            

            celdaIcono.appendChild(aIcono);
            celdaIconoActivar.appendChild(aIconoAc);
        }
    }

};

let registro =() =>{
    window.location.href = `p-tarjetas-registro.html?_id=${id_usuario_activo}`
}

btn_registro.addEventListener('click', registro);

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);


