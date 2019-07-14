// Aqui empieza todo el proceso para subir las fotos a cloudinary
const imgpreview = document.getElementById('img-preview');
const uploader_portada = document.getElementById('img-uploader-portada');
const uploader_contraportada = document.getElementById('img-uploader-contraportada');
const progress_bar = document.getElementById('progress-bar');
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