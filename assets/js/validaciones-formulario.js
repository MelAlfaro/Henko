/* Hace las validaciones en los datos digitados por el usuario para mostrar posible errores y manejar el evento submit */
function validacionesFormContacto() {
    const $form = document.querySelector(".form-contacto"),
        $inputs = document.querySelectorAll(".form-contacto [required]");

    $inputs.forEach((input) => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("error-form-contacto", "none");
        input.insertAdjacentElement("afterend", $span);
    })

    document.addEventListener("keyup", (e) => {
        if (e.target.matches(".form-contacto [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? document.getElementById($input.name).classList.add("esta-activo") : document.getElementById($input.name).classList.remove("esta-activo");
            }
            if (!pattern) {
                console.log("El input no tiene patrón");
                return $input.value === "" ? document.getElementById($input.name).classList.add("esta-activo") : document.getElementById($input.name).classList.remove("esta-activo");
            }
        }
    });

    document.addEventListener("submit", (e) => {
        alert("enviando Formulario de contacto");
        const $loader = d.querySelector(".contacto-form-loader"),
            $respuesta = d.querySelector(".contacto-form-respuesta");

        $loader.classList.remove("none");
        setTimeout(() => {
            $loader.classList.add("none");
            $respuesta.classList.remove("none");
            $form.reset();
            setTimeout(() => {
                $respuesta.classList.add("none")
            }, 3000);
        }, 3000);
    });
}

/* Listener DOMContentLoaded */
document.addEventListener("DOMContentLoaded", (e) => {
    validacionesFormContacto();
});