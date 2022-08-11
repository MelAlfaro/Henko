import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
    $productos = d.getElementById("productos"),
    $template = d.getElementById("producto-template").content,
    $templateTabla = d.getElementById("producto-seleccionado").content,
    $templateTablaFooter = d.getElementById("producto-total").content,
    $table = d.querySelector(".table-cotizacion"),
    $fragmento = d.createDocumentFragment(),
    $fragmento2 = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`
        }
    };

let productos, precios;

// cambia cadena de texto a formato moneda
const formatoMoneda = (num) => `₡${num.slice(0, -2)}.${num.slice(-2)}`;

// fetch de API Stripe, se llaman dos recursos del API, una para obtener los detalles del producto y otro para el precio
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
.then((respuestas) => Promise.all(respuestas.map((respuesta) => respuesta.json())))
.then((json) => {
    productos = json[0].data;
    precios = json[1].data;
    let indexPrecio = 0;
    precios.forEach((el) => {
        let datosProducto = productos.filter((producto) => producto.id === el.product);
        // Stripe pide enviar el id del producto a vender, por eso se crea este atributo
        $template.querySelector(".producto").setAttribute("data-precio", el.id);
        $template.querySelector(".producto").setAttribute("data-nombre", datosProducto[0].name);
        $template.querySelector(".producto").setAttribute("data-precio-real", precios[indexPrecio].unit_amount);
        $template.querySelector("img").src = datosProducto[0].images[0];
        $template.querySelector("img").alt = datosProducto[0].name;
        $template.querySelector("figcaption").innerHTML = `
        ${datosProducto[0].name}
        <br>
        ${formatoMoneda(el.unit_amount_decimal)} ${el.currency.toUpperCase()}
    `;
        let $clon = d.importNode($template, true);
        $fragmento.appendChild($clon);
        indexPrecio++;
    });
    $productos.appendChild($fragmento);
})
.catch((error) => {
    console.log(error);
    let mensaje = error.statusText || `Ocurrió un error al conectarse con la API de Stripe`;
    $productos.innerHTML = `<p>Error ${error.status}: ${mensaje}</p>`;
})

let total = 0;
d.addEventListener("click", (e) => {
    if (e.target.matches(".producto *")) {
        $table.querySelector("tfoot").innerText = "";
        let precio = parseFloat(e.target.parentElement.getAttribute("data-precio-real"));
        let nombre = e.target.parentElement.getAttribute("data-nombre");
        $templateTabla.querySelector(".nombre").textContent = nombre;
        $templateTabla.querySelector(".precio").textContent = precio * 0.01;
        total += precio * 0.01;
        $templateTablaFooter.querySelector(".total").innerHTML = `<b>Total:</b> ₡${total}`;
        let $clon = d.importNode($templateTabla, true);
        let $clon2 = d.importNode($templateTablaFooter, true);
        $fragmento.appendChild($clon);
        $fragmento2.appendChild($clon2);
        $table.querySelector("tbody").appendChild($fragmento);
        $table.querySelector("tfoot").appendChild($fragmento2);
    }
});