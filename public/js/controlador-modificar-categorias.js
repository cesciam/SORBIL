const input_categoria = document.querySelector('#txt-categoria');
const btn_actualizar = document.querySelector('#btn-enviar');

const urlParams = new URLSearchParams(window.location.search);
const posicion = urlParams.get('_i');

let validar = (pcategoria) => {

    let error = false;

    if (pcategoria == '') {
        error = true;
        input_categoria.classList.add('input_error');
    } else {
        input_categoria.classList.remove('input_error');
    }

    return error;
};

let datosCat = async()=>{
    let categorias = await obtenerCategorias();
    return categorias[posicion];
}

let llenarFormulario = async()=>{
    let categoriaA = await datosCat();
    input_categoria.value  = categoriaA.categoria;
}

let modificarCatt = async() =>{
    let categoriaA = await datosCat();
    let categoria = input_categoria.value;
    categoriaA.categoria = categoria;
    let error = validar(categoria);

    if (!error){
        modificarCategorias(categoriaA._id, categoriaA);
        window.location.href = `al-listar-categorias.html?_id=${idAl}`;
        
    }else{
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
}

llenarFormulario();
btn_actualizar.addEventListener('click', modificarCatt);