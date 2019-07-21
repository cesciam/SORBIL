'use strict';
//Select TODO:
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
        "San José": ["Carmen", "Catedral", "Hatillo", "Hospital", "La Uruca", "Mata Redonda", "Merced", "Pavas", "San Francisco de Dos Ríos", "San Sebastián", "Zapote"],
        "Acosta": ["Cangrejal", "Guaitil", "Palmichal", "Sabanillas", "San Ignaci"],
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
    "Heredia": {
        "Heredia": ["Mercedes"],
        "Barva": ["Barva"]

    },
    "Cartago": {
        "Cartago": ["Cartago"],
        "Paraíso": ["Paraíso"]

    },
    "Alajuela": {
        "Alajuela": ["Alajuela"],
        "San Ramón": ["Santiago"]

    },
    "Guanacaste": {
        "Liberia": ["Mayorga"],
        "Santa Crúz": ["Bolsón"]

    },
    "Puntarenas": {
        "Puntarenas": ["Chomes"],
        "Acosta": ["Cangrejal"]

    },
    "Limón": {
        "Limón": ["Valle La Estrella"],
        "Pococí": ["Guápiles"]

    }
}
window.onload = function () {
    let provincia = document.getElementById("txt-provincia"),
        canton = document.getElementById("txt-canton"),
        distrito = document.getElementById("txt-distrito");

    for (let state in ubicaciones) {
        provincia.options[provincia.options.length] = new Option(state, state);
    }
    provincia.onchange = function () {
        canton.length = 1; // remove all options bar first
        distrito.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        for (let county in ubicaciones[this.value]) {
            canton.options[canton.options.length] = new Option(county, county);
        }
    }
    provincia.onchange(); // reset in case page is reloaded
    canton.onchange = function () {
        distrito.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        let cities = ubicaciones[provincia.value][this.value];
        for (let i = 0; i < cities.length; i++) {
            distrito.options[distrito.options.length] = new Option(cities[i], cities[i]);
        }
    }
}
