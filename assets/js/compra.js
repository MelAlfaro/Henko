import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
    $productos = d.getElementById("productos"),
    $template = d.getElementById("producto-template").content,
    $fragmento = d.createDocumentFragment(),
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
        // console.log(json);
        productos = json[0].data;
        precios = json[1].data;
        console.log(productos, precios);

        precios.forEach((el) => {
            let datosProducto = productos.filter((producto) => producto.id === el.product);
            // Stripe pide enviar el id del producto a vender, por eso se crea este atributo
            $template.querySelector(".producto").setAttribute("data-precio", el.id);
            $template.querySelector("img").src = datosProducto[0].images[0];
            $template.querySelector("img").alt = datosProducto[0].name;
            $template.querySelector("figcaption").innerHTML = `${datosProducto[0].name}<br>${formatoMoneda(el.unit_amount_decimal)} ${el.currency.toUpperCase()}`;
            let $clon = d.importNode($template, true);
            $fragmento.appendChild($clon);
        });
        $productos.appendChild($fragmento);
    })
    .catch((error) => {
        console.log(error);
        let mensaje = error.statusText || `Ocurrió un error al conectarse con la API de Stripe`;
        $productos.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`;
    })

d.addEventListener("click", (e) => {
    if (e.target.matches(".producto *")) {
        let precio = e.target.parentElement.getAttribute("data-precio");
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems: [{ price: precio, quantity: 1 }],
            mode: "payment",
            successUrl: "https://melalfaro.github.io/henko/stripe-success.html",
            cancelUrl: "https://melalfaro.github.io/henko/stripe-cancel.html",
        })
        .then(respuesta => {
            if (respuesta.error) {
                console.log(respuesta);
                $productos.insertAdjacentElement("afterend", respuesta.error.message);
            }
        });
    }
});
