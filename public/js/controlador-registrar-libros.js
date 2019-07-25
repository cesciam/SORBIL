// Aqui empiezan todas las variables para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_portada = document.getElementById('img_uploader_portada');
const uploader_contraportada = document.getElementById('img_uploader_contraportada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

// Aqui terminan las variables para subir las fotos a cloudinary

const img_uploader_portada = document.querySelector('#portada');
const img_uploader_contraportada = document.querySelector('#contraportada');
const input_titulo = document.querySelector('#input_titulo');
const input_autor = document.querySelector('#input_autor');
const input_edicion = document.querySelector('#input_edicion');
const input_editorial = document.querySelector('#input_editorial');
const input_fecha = document.querySelector('#input_fecha');
const input_categorias = document.querySelector('#input_categorias');
const input_generos = document.querySelector('#input_generos');
const input_idioma = document.querySelector('#input_idioma');
const input_precio = document.querySelector('#input_precio');
const input_tipo_libro = document.querySelector('#input_tipo_libro');
const input_isbn = document.querySelector('#input_isbn');
const btn_enviar = document.querySelector('#btn_enviar');
const input_psinopsis = document.querySelector('#input_sinopsis');


let validar = (ptitulo, pautor, pedicion, peditorial, pfecha, pcategorias, pgeneros, pidioma, pprecio, plibro, pisbn, psinopsis) => {
    let error = false;

    let fecha_formateada = new Date(pfecha.value);
    
    if (img_uploader_portada.src == 'http://localhost:3000/public/imgs/book-placeholder.png'){
        error = true;
        img_uploader_portada.classList.add('input_error');
        console.log('Todo mal');
    } else {
        img_uploader_portada.classList.remove('input_error');
    }
    
    if (img_uploader_contraportada.src == 'http://localhost:3000/public/imgs/book-placeholder.png'){
        error = true;
        img_uploader_contraportada.classList.add('input_error');
        console.log('Todo mal');
    } else {
        img_uploader_contraportada.classList.remove('input_error');
    }

    if (ptitulo.value == ''){
        error = true;
        input_titulo.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_titulo.classList.remove('input_error');
    }

    if (pautor.value == ''){
        error = true;
        input_autor.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_autor.classList.remove('input_error');
    }

    if (pedicion.value == ''){
        error = true;
        input_edicion.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_edicion.classList.remove('input_error');
    }

    if (peditorial.value == ''){
        error = true;
        input_editorial.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_editorial.classList.remove('input_error');
    }

    if (fecha_formateada == 'Invalid Date'){
        error = true;
        input_fecha.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_fecha.classList.remove('input_error');
    }

    if (pcategorias.value == 0){
        error = true;
        input_categorias.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_categorias.classList.remove('input_error');
    }

    if (pgeneros.value == 0){
        error = true;
        input_generos.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_generos.classList.remove('input_error');
    }

    if (pidioma.value == ''){
        error = true;
        input_idioma.classList.add('input_error');
        console.log('Todo mal');
    } else {
        input_idioma.classList.remove('input_error');
    }

    if (pprecio.value < 0 || pprecio.value == '') {
        error = true;
        input_precio.classList.add('input_error');
    } else {
        input_precio.classList.remove('input_error');
    }
    
    if(plibro.value == 0){
        error = true;
        input_tipo_libro.classList.add('input_error');
    }else{
        input_tipo_libro.classList.remove('input_error');
    }

    if(pisbn.value == 0){
        error = true;
        input_isbn.classList.add('input_error');
    }else{
        input_isbn.classList.remove('input_error');
    }

    if(psinopsis.value == ''){
        error = true;
        input_psinopsis.classList.add('input_error');
    }else{
        input_psinopsis.classList.remove('input_error');
    }

    return error;

};

let llamar = () =>{
    let titulo = input_titulo.value;
    let autor = input_autor.value;
    let edicion = input_edicion.value;
    let editorial = input_editorial.value;
    let fecha = new Date(input_fecha.value);
    let categorias = input_categorias.value;
    let generos = input_generos.value;
    let precio = input_precio.value;
    let idioma = input_idioma.value;
    let tipo_libro = input_tipo_libro.value;
    let isbn = input_isbn.value;
    let src_portada = img_uploader_portada.src;
    let src_contraportada = img_uploader_contraportada.src;
    let sinopsis = input_psinopsis.value;



    let resultado_validaciones = validar(input_titulo, input_autor, input_edicion, input_editorial, input_fecha, input_categorias, input_generos, input_idioma, input_precio, input_tipo_libro, input_isbn, sinopsis);
    if(!resultado_validaciones){
        registrarLibro(titulo, autor, edicion, editorial, fecha, categorias, generos, idioma, precio, tipo_libro, isbn, src_portada, src_contraportada, sinopsis);
        Swal.fire({ //formato json
            title: 'Se ha registrado la información exitosamente',
            type: 'success',
        })
    }else{
        Swal.fire({ //formato json
            title: 'No se ha registrado la información',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
    
};



let lista_generos = [];

let agregar_generos = async () => {
    let select = document.getElementById("input_generos");
    lista_generos = await obtenerGeneros();
    
    for(i = 0; i < lista_generos.length; i++)
    {
        let option = new Option(lista_generos[i]['genero']);
        select.add(option);
    }
    
    
};

agregar_generos();

btn_enviar.addEventListener('click', llamar);