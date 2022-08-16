# Henko
Página creada para proyecto final de Diseño de Aplicaciones Web, archivo de tipo markup, se puede leer mejor en: https://github.com/MelAlfaro/henko/blob/main/README.md

-------------------------------------------------------------------------------------------
Hola Profesor! 
Abajo encontrará los créditos sobre el template utilizado para la creación de esta página.

- Template Name: Mentor
- Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
- Author: BootstrapMade.com
- License: https://bootstrapmade.com/license/

- Se utiliza del template: Animaciones (mayoría de páginas), Estilos para barra de navegación y footer (todas las páginas),  imagen tipo Hero, estilos para tarjetas (en Home), estilos de elementos menores (botones, tipos de fuente, iconos, layout para los mismos) (mayoría de páginas), slider (en Sobre Henko), card de eventos (en Acerca de), algunos estilos de los inputs para contacnto (en Contacto, así como los ya mencionados estilos para botones e íconos).

-------------------------------------------------------------------------------------------
En la siguiente sección, encontrará donde se aplica cada uno de los requerimientos

- Contenido base del sitio
    - [x]  Página de Home, con uso de navegación y menús. > Página: HOME
    - [x]  Páginas con:
        - [x]  historia > Página: SOBRE HENKO
        - [x]  datos del servicio > Página: SOBRE HENNKO
        - [x]  galería de imágenes > Página: GALERÍA
    - [x]  Página de información de contacto > Página: CONTACTO
    - [x]  Página de acerca del sitio > Página: ACERCA DE
    - [x]  Página que implemente ubicación por geolocalización utilizando Google API. > Página: ACERCA DE
    - [x]  Página que implemente multimedia audio y video en HTML5. > Página: MULTIMEDIA
- Deberá implementar menús para navegación desde el home. > Página: BARRA DE NAVEGACIÓN, así como los links incluidos en la mayoría de elementos.
- Deberá de tener los vínculos de ida y vuelta, es decir, cada página me llevará a la siguiente por medio de un vínculo y viceversa. > Página: implementado en barra de navegación para todas las páginas.

Se toma en consideración todos los puntos abajo, fueron aplicados a lo largo de todas las páginas.
- Diseño General
    - [x]  El diseño debe ser atractivo para el usuario y de fácil navegación.
    - [x]  Debe utilizar una línea de colores entre las imágenes, textos y fondos que sigan un patrón de concordancia.
    - [x]  Debe utilizar hojas de estilo externas en donde se aplica todo el diseño.
    - [x]  El sitio deberá implementar algún framework como Bootstrap para hacer su sitio responsivo y amigable.
    - [x]  Deberá implementarse bajo la modalidad “Mobile First”
- Galería de imágenes
    - [x]  El sitio debe contar con una galería de imágenes acordes con la información que se deseé

## Home del Sitio
    - Maquetado > se incluyen los elementos que se solicitan en la imagen.
    - Fondo de Pantalla:
        - [x]  Debe utilizar colores e imágenes para que su diseño. > Se mantiene un mismo patrón y paleta de colores para todo el sitio.
    - Header:
        - [x]  El diseño del header es abierto, pero debe considerar el uso imágenes de fondo, imágenes como logos, textos coloridos que se diferencien con el demás contenido e identifiquen lo que se desea mostrar en el sitio.
   
   Se incluye en barra de navegación todos los aspectos abajo mencionados
   - Navegación:
    Deberá contener una barra de menú de navegación que permita al usuario navegar a todas las páginas que componen el sitio. Esta barra de navegación deberá contener un estilo interactivo con efectos cuando se navega sobre el menú similar a los vistos en clase.
    La navegación básica deberá contener:
        - [x]  Direccionamiento al Home
        - [x]  Página de Información de Contacto
        - [x]  Página de Acerca del sitio
        - [x]  Página o páginas del tema principal de interés que puede contener menú emergente
        - [x]  Demás elementos o páginas que se requiera direccionar

    Se agregan distintas secciones dentro del home, que incluyen los aspectos solicitados abajo.
    - Contenido Principal: El contenido principal del home deberá tener como mínimo:
        - [x]  Paneles que muestren información de noticias o temas relevantes
        - [x]  La información más importante a destacar del tema del Sitio
        - [x]  Imágenes que apoyen el contenido
        - [x]  La división del contenido en Div, Article o Aside queda a criterio del diseñador.
    
    Se siguen las indicaciones abajo para la creación del footer, se agrega un degradado para el background junto con un logo como fondo de pantalla, así como links al contenido más relevante.
    - Footer:
        - [x]  El diseño del footer es abierto, pero debe considerar el uso de imágenes de fondo, imágenes como logos, menú de acceso rápido al contenido más relevante e información sobre los derechos de autor.
    
    Se incluye carousel en home.
    - Carrusel:
        - [x]  Debe incorporar en su sitio elementos responsivos, en el sitio principal debe incluir un “Bootstrap Carousel” de forma que se muestre el contenido de diferente información e imágenes en la pantalla principal y que esta funcione de manera responsiva.

## Páginas de Contenido
Las páginas de contenido son todas aquellas páginas que son necesarias para mostrar información que se desea publicar en el Sitio o bien con las cuales se desea interactuar con el usuario y deben ser invocadas desde la barra de navegación del Home o en links en otras páginas de contenido. Las páginas de contenido deben considerar lo siguiente:
    * se utiliza una hoja de estilos para elementos utilizados en todo el sitio y hojas separadas para estilos aplicados a una sola página.
    - [x]  Debe utilizar hojas de estilo aplicables según sea cada

    * Se mantiene la misma estructura para barra de navegacion y footer para todas las paginas donde estan presentes ambos o solo uno de los dos, se mantiene redireccion en todas las paginas.
    - [x]  En la medida de lo posible deben conservar la estructura básica del maquetado del Home y analizar la posibilidad de mantener la estructura de header, navegación y footer del home, esta medida no es restrictiva por lo que acorde con el diseño podría tener una estructura de maquetado distinta, en cuyo caso debe asegurarse que las páginas puedan redireccionar al página de home y mantengan una concordancia en colores y diseño base, de forma tal que siempre que el usuario navegue tenga la sensación de estar en el mismo sitio.
    
    * Se realizan calculos y validaciones en 5 paginas de js.
    - [x]  Debe aplicar en al menos 3 páginas de contenido con validaciones simples y complejas con JavaScript.

    * Página CONTACTO incluye formulario, se incluye un API para manejo del envío y cálculo para validaciones de datos en los distintos inputs.
    - [x]  debe implementar al menos una página con formularios que realice cálculos complejos con JavaScript.

    * Página VISITANOS consume servicio REST de clima
    - [x]  Página que consuma servicios REST.

    * Se utiliza JQuery en página COTIZA
    - [x]  Debe aplicar JQuery en al menos 1 página, para realizar acciones o validaciones.

    * Se crea una tabla dinámica con estilos en página COTIZA
    - [x]  Debe utilizar en al menos una página tablas formateadas con estilos.

    * Se incluyen todas las páginas mencionadas, así como los distintos elementos solicitados para el formulario, así como el cálculo de edad en contacto.js, envío de datos via correo, así como la posibilidad en la pagina contacto contacto.html en linea 91, de agregar una direccion de correo para que se haga un cc del mismo. Se implementa API de geolocalizacion en página visítanos, que además muestra distancia y duración en vehículo. En la página multimedia, se agrega audio y video, con estilos personalizados para mantener el diseño de la página, así como página de autor, que incluye la información solicitada.
    - Debe considerar como mínimo las siguientes páginas de contenido:
        - [x]  Página de historia del sitio o tema a representar (Sobre Henko)
        - [x]  Página con datos generales del servicio o enfoque del tema (Sobre Henko)
        - [x]  Página de galería de imágenes.
        - [x]  Página de información de contacto: Debe mostrar información de contacto sobre el dueño de la página y habilitar un formulario en html para registro y envío de los datos por medio email, debe considerar como mínimo:
            - [x]  Email, input del tipo.
            - [x]  Nombre completo de la persona.
            - [x]  Fecha de nacimiento, input tipo fecha.
            - [x]  Rango de ingreso, input del tipo correspondiente.
            - [x]  Debe calcularse la edad utilizando la fecha de nacimiento e incluirlo oculto en el formulario.
            - [x]  Género utilizando un input de selección única.
            - [x]  Grado académico, input de selección múltiple.
        - [x]  Página de acerca del sitio, diseño libre de contenido del estudiante.
        - [x]  Página que implemente ubicación por geolocalización utilizando Google API, debe implementar como mínimo la ubicación donde se encuentra en un mapa y trazar la ruta más cercana el contacto del sitio o sucursal de la empresa o tema
        - [x]  Páginas que implementen multimedia audio y video en HTML5:
            - [x]  debe implementar en donde se muestre un video relacionado al tema
            - [x]  un audio de interés del sitio.
        - [x]  Página con información del Autor, información completa del estudiante:
            - [x]  Cédula
            - [x]  Nombre
            - [x]  Correo electrónico
            - [x]  Fotografía
            - [x]  Cualquier información que desee resaltar
