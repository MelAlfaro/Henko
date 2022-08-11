const d = document,
    rangeInputs = document.querySelectorAll('input[type="range"]'),
    numberInput = document.querySelector('input[type="number"]'),
    $fechaNacimiento = document.getElementById("fecha-nacimiento"),
    $edad = document.getElementById("edad").value;


// función que dinámicamente cambia el tamaño del background del input de tipo range conforme el usuario lo mueve
function manejaCambioEnInput(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

const calculoEdad = (fecha) => {
    var fecha = document.getElementById("fecha-nacimiento").value;
    console.log(fecha);
    let hoy = new Date();
    let cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    document.querySelector("#edad").textContent = `La edad calculada es de: ${edad} años`;
    return console.log(edad);
}

/* Event Listeners */
rangeInputs.forEach(input => {
    input.addEventListener("input", manejaCambioEnInput);
});

$fechaNacimiento.addEventListener("change", calculoEdad);
/* Event Listeners */