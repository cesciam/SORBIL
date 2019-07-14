// Aqui empieza todo el proceso para subir las fotos a cloudinary
const imgpreview = document.getElementById('img_preview');
const uploader_portada = document.getElementById('img_uploader_portada');
const uploader_contraportada = document.getElementById('img_uploader_contraportada');
const progress_bar = document.getElementById('progress_bar');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/fenixsorbil/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gmqflv3u';

uploader_portada.addEventListener('change', async (e)=> {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        /*onUploadProgress(e) {
            console.log(Math.round((e.loaded * 100) / e.total));
            const progress = (e.loaded * 100) / e.total;
            progress_bar.setAttribute('value', progress);
        }*/
    });

    /*let img = res.data.url;
    imgpreview-portada.src = img;
    */
});

uploader_contraportada.addEventListener('change', async (e)=> {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        /*onUploadProgress(e) {
            console.log(Math.round((e.loaded * 100) / e.total));
            const progress = (e.loaded * 100) / e.total;
            progress_bar.setAttribute('value', progress);
        }*/
    });
    

    /*let img = res.data.url;
    imgpreview-contraportada.src = img;
    */
});

// Aqui termina todo el proceso para subir las fotos a cloudinary

const img_uploader_portada = document.querySelector('#img_uploader_portada');
const img_uploader_contraportada = document.querySelector('#img_uploader_contraportada');
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

let validar = (pportada, pcontraportada, ptitulo, pautor, pedicion, peditorial, pfecha, pcategorias, pgeneros, pidioma, pprecio, plibro, pisbn) => {
    let error = false;

    let fecha_formateada = new Date(pfecha.value);
    
    if (pportada.value == ''){
        error = true;
        img_uploader_portada.classList.add('input_error');
        console.log('Todo mal');
    } else {
        img_uploader_portada.classList.remove('input_error');
    }
    
    if (pcontraportada.value == ''){
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

    if (pprecio.value == '') {
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

};

let llamar = () =>{
    validar(img_uploader_portada, img_uploader_contraportada, input_titulo, input_autor, input_edicion, input_editorial, input_fecha, input_categorias, input_generos, input_idioma, input_precio, input_tipo_libro, input_isbn);
}


btn_enviar.addEventListener('click', llamar);