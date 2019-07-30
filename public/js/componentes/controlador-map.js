'use strict';

function initMap() {
    // Map options
    // var options = {
    //     zoom: 8,
    //     center: { lat: 9.934739, lng: -84.087502 }
    // }

    // New map
    // var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    // google.maps.event.addListener(map, 'click', function (event) {
    //     // Add marker
    //     addMarker({ coords: event.latLng });
    // });

    // Loop through markers
    // for (var i = 0; i < markers.length; i++) {
    //     // Add marker
    //     addMarker(markers[i]);
    // }

    // Agregar marcador
    // function addMarker(props) {
    //     var marker = new google.maps.Marker({
    //         position: props.coords,
    //         map: map,
    //         //icon:props.iconImage
    //     });

    //     // Check for customicon
    //     if (props.iconImage) {
    //         // Set icon image
    //         marker.setIcon(props.iconImage);
    //     }

    //     // Check content
    //     if (props.content) {
    //         var infoWindow = new google.maps.InfoWindow({
    //             content: props.content
    //         });

    //         marker.addListener('click', function () {
    //             infoWindow.open(map, marker);
    //         });
    //     }
    // }

    //++++++++++++++++++++++++ NUEVO CÓDIGO DE PRUEBA ++++++++++++++++++++++++++++++++++++++++

    let map;
    let latitude = 9.934739; // YOUR LATITUDE VALUE
    let longitude = -84.087502; // YOUR LONGITUDE VALUE

    let myLatLng = { lat: latitude, lng: longitude };

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14,
        disableDoubleClickZoom: true, // disable the default map zoom on double click
    });

    let marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function () {

        let valuelatitud = marker.getPosition().lat();
        let valuelongitud = marker.getPosition().lng();
        longitud(valuelongitud);
        latitud(valuelatitud);

    });    
}