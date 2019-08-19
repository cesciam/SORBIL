'use scrict';

let selectSucursales = document.querySelector('#input_suc');
let cantidad = document.querySelector('#input_cantidad');
let btn_registrar = document.querySelector('#btn-registrar');
let cantidad_disponible = document.querySelector('#cantidad_libros_disponible');
let libreria = [];
let correoLibrosSucursal;

const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('_id');

let agregar_sucursales = async () => {
    let user =  JSON.parse(sessionStorage.getItem('activo'));
    correoLibrosSucursal = user.correo;
    libreria = await obtenerLibreriaPorCorreo(correoLibrosSucursal);

    let lista_suc = libreria[0].sucursales;
    
    for(i = 0; i < lista_suc.length; i++)
    {
        let option = new Option(lista_suc[i].nombre);
        selectSucursales.add(option);
    }

    for (let x = 0; x < libreria[0].libros.length; x++) {
        if(libreria[0].libros[x].idlibro == id){
            cantidad_disponible.innerHTML = libreria[0].libros[i].cantidad;
        }
        
    }
    
    
    
};

let validar = (pselect, pcantidad)=>{
    let error = false;

    if (pselect == 0 ){
        error = true;
        selectSucursales.classList.add('input_error');
    } else {
        selectSucursales.classList.remove('input_error');
    }

    let cantidadparavalidar = parseInt(libreria[0].libros[i].cantidad);
    if(pcantidad > cantidadparavalidar || pcantidad == '' || pcantidad <= 0){
        error = true;
        cantidad.classList.add('input_error');
    } else {
        cantidad.classList.remove('input_error');
    }

    return error;
}

let posicionSucursal=(psucursal)=>{
    let posicion;
    for (let i = 0; i < libreria[0].sucursales.length; i++) {
        if(psucursal == libreria[0].sucursales[i].nombre)
        posicion = i;
        
    }
    return posicion;
}

let validarSiYaExisteLibro = (pid, libreria) =>{
    let existe = false;
    let posicionlib;
    let posicionSuc= posicionSucursal(selectSucursales.value);
    

    for(let i = 0; i < libreria[0].sucursales[posicionSuc].librosSuc.length; i++){
            if (pid == libreria[0].sucursales[posicionSuc].librosSuc[i].id){
                existe = true;
                posicionlib = i;
            }   
           
    }

    if(existe == false){
        return false;
    }else{
        return posicionlib;
    }

};

let llamar =()=>{
let error = validar(selectSucursales.value, cantidad.value);

if(!error){
    let existe = validarSiYaExisteLibro(id, libreria);
    if( typeof(existe)== 'number'){
        console.log('Existe');
        
    }else{
        console.log('No existe');
    }


    agregar_libros_sucursal(id, libreria[0].libros[i].cantidad, correoLibrosSucursal)
}

}


agregar_sucursales();
btn_registrar.addEventListener('click', llamar);

