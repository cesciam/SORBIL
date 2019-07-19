'use strict';
//Select de las ubicaciones
let provincia = document.getElementById("txt-provincia");
let canton = document.getElementById("txt-canton");
let distrito = document.getElementById("txt-distrito");

let valoresProvincia = () => {
    let json = { "data": ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Limón", "Puntarenas"] };

    for (let i = 0; i < json.data.length; i++) {
        let option = document.createElement("option");
        option.text = json.data[i];
        option.value = json.data[i];
        provincia.add(option);
    }
}

let valoresCanton = () => {
    let json = { "data": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"] };

    for (let i = 0; i < json.data.length; i++) {
        let option = document.createElement("option");
        option.text = json.data[i];
        option.value = json.data[i];
        canton.add(option);
    }
}

let valoresDistrito = () => {
    let json = { "data": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"] };

    for (let i = 0; i < json.data.length; i++) {
        let option = document.createElement("option");
        option.text = json.data[i];
        option.value = json.data[i];
        distrito.add(option);
    }
}

valoresProvincia();
valoresCanton();
valoresDistrito();
