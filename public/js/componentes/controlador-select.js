'use strict';
//Select
// let provincia = document.getElementById("txt-provincia");
// let canton = document.getElementById("txt-canton");
// let distrito = document.getElementById("txt-distrito");

// let valoresProvincia = () => {
//     let json = { "data": ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Limón", "Puntarenas"] };

//     for (let i = 0; i < json.data.length; i++) {
//         let option = document.createElement("option");
//         option.text = json.data[i];
//         option.value = json.data[i];
//         provincia.add(option);
//     }
// }

// let valoresCanton = () => {
//     let json = { "data": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"] };

//     for (let i = 0; i < json.data.length; i++) {
//         let option = document.createElement("option");
//         option.text = json.data[i];
//         option.value = json.data[i];
//         canton.add(option);
//     }
// }

// let valoresDistrito = () => {
//     let json = { "data": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"] };

//     for (let i = 0; i < json.data.length; i++) {
//         let option = document.createElement("option");
//         option.text = json.data[i];
//         option.value = json.data[i];
//         distrito.add(option);
//     }
// }

// valoresProvincia();
// valoresCanton();
// valoresDistrito();

let ubicaciones = {
    "San José": {
        "Central": ["Carmen", "Catedral", "Hatillo", "Hospital", "La Uruca", "Mata Redonda", "Merced", "Pavas", "San Francisco de Dos Ríos", "San Sebastián", "Zapote"],
        "Acosta": ["Cangrejal", "Guaitil", "Palmichal", "Sabanillas", "San Ignacio"],
        "Alajuelita": ["Alajuelita", "Concepción", " San Antonio", "San Felipe", "San Josecito"],
        "Aserrí": ["Aserrí", "Legua", "Monterrey", "Salitrillos", "San Gabriel", "Tarbaca", " Vuelta de Jorco"],
        "Curridabat": ["Curridabat"],
        "Desamparados": ["Damas"],
        "Dota": ["Copey"],
        "Escazú": ["Escazú"],
        "Goicochea": ["Calle Blancos"],
        "León Cortés": ["San Pablo"],
        "Montes de Oca": ["Mercedes"],
        "Mora": ["Ciudad Colón"],
        "Moravia": ["San Jerónimo"]
    },
    "Alajuela": {
        "Alajuela": ["Alajuela", "San José", "Carrizal", "San Antonio", "Guácima", "San Isidro", "Sabanilla"],
        "San Ramón": ["San Ramón", "Santiago", "San Juan", "Piedades Norte", "Piedades Sur", "San Rafael", "San Isidro"],
        "Grecia": ["Grecia", "San Isidro", "San José", "San Roque", "Tacares", "Rio Cuarto"],
        "San Mateo": ["San Mateo", "Desmonte", "Jesús María", "Labrador"],
        "Atenas": ["Atenas", "Jesús", "Mercedes"],
        "Naranjo": ["Naranjo", "San Miguel", "San José"],
        "Palmares": ["Palmares", "Zaragoza", "Buenos Aires"],
        "Poás": ["San Pedro", "San Juan", "San Rafael"],
        "Orotina": ["Orotina", "El Mastate"],
        "San Carlos": ["Quesada", "Florencia", "Buenavista", "Aguas Zarcas"],
        "Zarcero": ["Zarcero", "Laguna", "Tapesco"],
        "Valverde Vega": ["Sarchí Norte", "Sarchí Sur", "Toro Amarillo"],
        "Upala": ["Upala", "Aguas Claras", "Bijagua"],
        "Los Chiles": ["Los Chiles"],
        "Guatuso": ["San Rafael"],
        "Río Cuarto": ["Río Cuarto"]
    },
    "Cartago": {
        "Cartago": ["Oriental", "Occidental", "Carmen", "San Nicolás", "Aguacaliente"],
        "Paraíso": ["Paraíso", "Santiago", "Orosi", "Cachí", "Llanos de Santa Lucía"],
        "La Unión": ["Tres Ríos", "San Diego", "San Juan", "San Rafael", "Concepción"],
        "Jiménez": ["Juan Viñas", "Tucurrique", "Pejibaye"],
        "Turrialba": ["Turrialba", "La Suiza", "Peralta",],
        "Alvarado": ["Pacayas", "Cervantes", "Capellades"],
        "Oreamuno": ["San Rafael", "Cot", "Potrero Cerrado"],
        "El Guarco": ["El Tejar", "San Isidro", "Tobosi"]
    },
    "Heredia": {
        "Heredia": ["Heredia", "Mercedes", "San Francisco", "Ulloa"],
        "Barva": ["Barva", "San Pedro", "San Pablo", "San Roque"],
        "Santo Domingo": ["	Santo Domingo", "San Vicente", "San Miguel", "Paracito"],
        "Santa Bárbara": ["Santa Bárbara", "San Pedro", "San Juan", "Jesús"],
        "San Rafael": ["San Rafael", "San Josecito", "Santiago", "Los Ángeles", "Concepción"],
        "San Isidro": ["San Isidro", "San José", "Concepción", "San Francisco"],
        "Belén": ["San Antonio", "La Ribera", "La Asunción"],
        "Flores": ["San Joaquín", "Barrantes", "Llorente"],
        "San Pablo": ["San Pablo", "Rincón De Sabanilla"]

    },
    "Guanacaste": {
        "Liberia": ["Liberia", "Mayorga", "Cañas Dulces", "Mayorga", "Nacascolo"],
        "Nicoya": ["Nicoya", "Mansión", "San Antonio", "Quebrada Honda"],
        "Santa Cruz": ["Santa Cruz", "Bolsón", "Veintisiete de Abril", "Tempate"],
        "Bagaces": ["Bagaces", "La Fortuna", "Mogote"],
        "Carrillo": ["Filadelfia", "Palmira", "Sardinal"],
        "Cañas": ["Cañas", "Palmira", "San Miguel"],
        "Abangares": ["Las Juntas", "Sierra", "San Juan"],
        "Tilarán": ["Tilarán", "Quebrada Grande", "Tronadora"]
    },
    "Puntarenas": {
        "Puntarenas": ["Puntarenas", "Pitahaya", "Chomes", "Lepanto"],
        "Esparza": ["Espíritu Santo", "San Juan Grande", "Macacona"],
        "Buenos Aires": ["Buenos Aires", "Volcán", "Potrero Grande", "	Boruca"],
        "Montes De Oro": ["Miramar", "La Unión", "San Isidro"],
        "Osa": ["Puerto Cortés", "Palmar", "Sierpe", "Bahía Ballena"],
        "Quepos": ["Quepos", "Savegre", "Naranjito"],
        "Golfito": ["Golfito", "Puerto Jiménez", "Guaycará"],

    },
    "Limón": {
        "Limón": ["Limón", "Valle La Estrella", "Río Blanco"],
        "Pococí": ["Guápiles", "Jiménez", "Rita"],
        "Siquirres": ["Siquirres", "Pacuarito", "Florida", "Germania"],
        "Talamanca": ["Bratsi", "Sixaola", "Cahuita", "Telire"],
        "Matina": ["Matina", "Batán", "Carrandí"],
        "Guácimo": ["Guácimo", "Mercedes", "Pocora", "Río Jiménez", "Duacari"],
    }

}

let provincia = document.querySelector("#txt-provincia"),
    canton = document.querySelector("#txt-canton"),
    distrito = document.querySelector("#txt-distrito");

for (let opt_provincia in ubicaciones) {
    provincia.options[provincia.options.length] = new Option(opt_provincia, opt_provincia);
}
provincia.onchange = function () {
    canton.length = 1;
    distrito.length = 1;
    if (this.selectedIndex < 1) return;
    for (let opt_canton in ubicaciones[this.value]) {
        canton.options[canton.options.length] = new Option(opt_canton, opt_canton);
    }
}
provincia.onchange();
canton.onchange = function () {
    distrito.length = 1;
    if (this.selectedIndex < 1) return;
    let opt_distritos = ubicaciones[provincia.value][this.value];
    for (let i = 0; i < opt_distritos.length; i++) {
        distrito.options[distrito.options.length] = new Option(opt_distritos[i], opt_distritos[i]);
    }
}

