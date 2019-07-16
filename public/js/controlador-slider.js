//Slider
let glide = new Glide('.glide', {
    type: 'carrousel', //hay dos tipos slider y carrousel
    startAt: 3, //a dónde inicia el slider
    peek: 1, //tamaño de los elementos
    gap: 10, //espacio entre los elementos
    bound: false, // que no llegue hasta el final
    hoverpause: true, // pause cuandos se hace hover
    focusAt: 'center', // estará enfocada en el centro 
    keyboard: true, // permite el uso del teclado
    autoplay: 1500, //inicia automatic en miliseg
    perView: 5, //cantidad de slide en pantalla
    breakpoints: { //para el tamaño de pantalla
        800: { perView: 2 },
        480: { perView: 1 }
    }
})
glide.mount()  
