/* Obtiene geolocation y hace fetch de API weatherbit con una función auto-ejecutable*/
(() => {
    const message = document.querySelector('#message');
    // Verifica que la geolocalización sea soportada por el navegador
    if (!navigator.geolocation) {
        message.textContent = `Su navegador no soporta geolocalización`;
        message.classList.add('error');
        return;
    }
    // Maneja el evento click
    const btn = document.querySelector('#show');
    btn.addEventListener('click', function () {
        const $loader = document.querySelector(".clima-loader");
        $loader.classList.remove("none");
        // Obtiene la posición actual
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
    // Manejador para caso exitoso
    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;
        message.classList.add('success');
        fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=d37d71d35b67456a8678fe388bad44af&include=minutely&lang=es`)
        .then(response => response.json())
        .then(response => {
            message.innerHTML = `<i class="bx bx-chevron-right"></i> La temperatura actual es de: <b>${response.data[0].temp}°</b> Celsius.<br><i class="bx bx-chevron-right"></i> Con un clima: <b>${response.data[0].weather.description}.</b>`;
            // remueve el loader
            const $loader = document.querySelector(".clima-loader");
            $loader.classList.add("none");
        })
        .catch(err => console.error(err));
    }
    // Maneja para caso de error
    function onError() {
        message.classList.add('error');
        message.textContent = `No se encontró tu ubicación!`;
    }
})();

/* Google Maps directions API */
// configuración de las opciones que map necesita
var myLatLng = { lat: 10.00121, lng: -84.26512 };
var mapOptions = {
    center: myLatLng,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//creación del mapa
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
// creación de un DirectionsService object para usar el metodo route y obtener el resultado del request
var directionsService = new google.maps.DirectionsService();
// creación de un DirectionsRenderer object el cual funciona para mostrar la ruta
var directionsDisplay = new google.maps.DirectionsRenderer();
// se liga el renderer al mapa
directionsDisplay.setMap(map);

// se define funcion calcRoute
function calcRoute() {
    //crea request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }
    // pasa el request al método route
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // obtiene distancia y tiempo
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'><b>Desde:</b> " + document.getElementById("from").value + ".<br /><b>Hacia:</b> " + "<i>Henko Accesories</i>" + ".<br /><b>Distancia en vehículo <i class='fas fa-road'></i> :</b> " + result.routes[0].legs[0].distance.text + ".<br/><b>Duración <i class='fas fa-hourglass-start'></i> :</b>" + result.routes[0].legs[0].duration.text + ".</div>";
            // se desliega la ruta
            directionsDisplay.setDirections(result);
        } else {
            // borra la ruta del mapa
            directionsDisplay.setDirections({ routes: [] });
            // centra el mapa en parque monterrocoso
            map.setCenter(myLatLng);
            // muestra posibles mensajes de error
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle text-danger'></i> No se pudo crear la ruta! </div>";
        }
    });
}

// autocompletado para el input Origen
var options = {
    types: ['(cities)']
}
var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
/* Google Maps directions API */
