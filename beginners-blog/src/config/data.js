export const blogList = [
  {
    id: 1,
    title: 'Primera y segunda semana de desarrollo',
    category: 'definición',
    subCategory: ['ideas', 'alcance', 'transformación'],
    description:
      "Inauguramos este proyecto, claramente definiendo que videojuego íbamos a tratar, esta selección se llevo a cabo por medio de votaciones para depurar algunas propuestas que no fueran tan llamativas en comparación a otras, así conformamos esta mesa de trabajo gracias a los intereses que se despertaron por la propuesta de Daniel Colmenares, propuesta de realizar un videojuego de terror en realidad virtual, a continuación, indicaremos algunas de sus especificidades. La plataforma para la cual pensamos a futuro desplegar este videojuego es Oculus/Meta Quest 2, teniendo siempre en mente nuestro público, que vendrían siendo jugadores o usuarios de Quest 2 quienes disfrutan de las historias y de la exploración en los videojuegos a quienes les llama la atención la cultura colombiana, que tienen curiosidad por los límites de su dispositivo y que disfrutan de experiencias cortas. Como breve descripción del juego podríamos compartir que, Dark Besiege (Nombre del videojuego) es una historia corta de terror en RV ambientada en Caldas-Colombia que provoca emociones en el jugador mediante su inmersiva ambientación y cautivadora narrativa, contando la historia de Pedro Suárez. Con el pasar de los días, evidenciamos que la propuesta que teníamos en mente era muy ambiciosa, así que usamos los días de esta semana principalmente para acotar el alcance y realizar transformaciones en el videojuego.",
    authorName: 'Juan Sebastian Galeano A',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Septiembre 15, 2022',
    cover: '/assets/images/GDD.webp',
  },
  {
    id: 2,
    title: 'Tercera y cuarta semana de desarrollo',
    category: 'experimentación',
    subCategory: ['libreria', 'sofware', 'problemas'],
    description:
      "Luego de que toda la mesa de trabajo conociera con detalle cual era la ruta que íbamos a tomar y al ritmo que íbamos a marchar, iniciamos con la exploración de que herramientas usar para cada una de nuestras necesidades, definimos el motor grafico en el que íbamos a trabajar, cuales librerías o mods usaríamos, que software sería el ideal para nuestros modelados 3d, etc. Ahora bien, iniciamos con la realización de los modelados, pensamos en los elemento que necesitaba o queríamos en nuestra escena y a la par estábamos haciendo pruebas de rendimiento, cabe aclarar que para este primer punto estábamos usando el controlador de realidad virtual común que ya viene por defecto en Unity, acá nos encontramos con resultados poco esperanzadores, no corría con facilidad en el Quest 2, por lo tanto, un tema nuevo a trabajar que surgió de este percance fue buscar la manera de optimizar el videojuego para Quest 2. Estudiamos diferentes opciones y alternativas para solventar el problema anterior, dentro de estas descubrimos una alternativa de solución que involucraba la compra de una librería, cada uno de los integrantes, cuatro en total, aportamos ochenta mil pesos colombianos para la compra de esta, tomamos esa decisión porque nos brindaba múltiples herramientas de las cuales podríamos hacer uso para nuestro beneficio, quizá no era la opción más rentable, pero si la más optima para erradicar el problema. Esta era una librería que optimizaba nuestro juego comprimiéndolo, de tal manera que no se sacrificara rendimiento o calidad, y también, contaba con algunas interacciones en el apartado gráfico, es decir, las manos en el entorno de realidad virtual lograban realizar todo lo que queríamos que hicieran, claramente realizándole sus respectivos ajustes.",
    authorName: 'Juan Sebastian Galeano A.',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Septiembre 22, 2022',
    cover: '/assets/images/RealidadV.webp',
  },
  {
    id: 3,
    title: 'Quinta y sexta semana de desarrollo',
    category: 'creación',
    subCategory: ['mods', 'fisicas', 'modelados'],
    description:
      "Ya un poco más familiarizados con las herramientas y también con la librería que pensábamos adquirimos, por medio de una prueba temporal, comenzamos con la elaboración de scripts, animaciones y modelados muchos más densos, por ejemplo, dentro de la librería encontramos elementos que nos ayudaron con las mecánicas de las armas, todo lo relacionado con los modelados y animaciones para el disparo , recarga y movimientos con el arma, paralelamente, estábamos trabajando con los colliders con otros objetos, buscábamos primeramente sostener elementos, empujarlos y romperlos en caso de requerirlo. Siempre teniendo control total dentro de la herramienta, estábamos trabajando nativamente en Unity logrando estas concreciones, lastimosamente por la subida del dólar, esta librería se torno mucho más cara por lo cual, de nuevo, buscamos soluciones muy similares y nos encontramos con Bonelab un juego que permite modificaciones y creaciones particulares dependiendo de lo que necesites para tu juego, es palabras resumidas, esta nueva opción era un juego dentro del cual podríamos de cierta forma crear nuestro juego, es cierto que vimos algunas limitaciones comparándolo con la idea inicial, pero nada que fuese solucionable. Finalmente usamos este juego llamado Bonelab con su respectivo motor Marrow.",
    authorName: 'Juan Sebastian Galeano A.',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Septiembre 29, 2022',
    cover: '/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg',
  },
  {
    id: 4,
    title: 'Séptima y Octava semana de desarrollo',
    category: 'composición',
    subCategory: ['edición', 'teaser', 'mapa'],
    description:
      "Bonelab salió aproximadamente el 7 de agosto de este presente año, es decir, es un proyecto muy reciente, luego de compartir algunas opiniones, podemos decir que la mejor manera de describirlo es como un sandbox basado en la física. Todo tiene física y peso, incluidos tus brazos y tu cuerpo. Lo que esto significa es que interactúas con el mundo del juego más allá de lo que los juegos de RV suelen apuntar. Cuando adquirimos dicho juego, como lo mencionamos anteriormente, la mayor parte del tiempo lo que realizamos fueron pruebas, luego de ello, para estas fechas ya estábamos como tal realizando la maquetación del entorno, con esto me refiero a iniciar la composición con el fin de tener una sección jugable para realizar su respectivo teaser, realizamos el respectivo logo de nuestro videojuego usando herramientas de la suite de adobe, también, para la realización de efectos especiales y edición de video, además, de usar pro tools para retocar el sonido.",
    authorName: 'Juan Sebastian Galeano A',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Octubre 06, 2022',
    cover: '/assets/images/designer-1.jpg',
  },
  {
    id: 5,
    title: 'Novena y decima semana de desarrollo',
    category: 'pruebas',
    subCategory: ['ajustes', 'problemas', 'mecanicas'],
    description:
      "Siendo sincero, estas semanas fueron difíciles, al punto de convertirse en puntos críticos en el desarrollo del videojuego, desde que inició este semestre realmente por apropiación o gusto comentamos que este proyecto primaria con respecto a otros, con el pasar de las semanas, debido a situaciones personales de cada uno y a las exigencias académicas de las otras materias, notamos que algunas pretensiones se estaban volviendo difíciles de concretar por los tiempo estipulados, lo que nos exigió realizar nuevamente ajustes, no podíamos realizar el desarrollo completo que plasmamos en el GDD, por lo que, nos enfocamos en un nivel de esta historia.",
    authorName: 'Juan Sebastian Galeano A',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Octubre 13, 2022',
    cover: '/assets/images/make-it-personal.jpg',
  },
  {
    id: 6,
    title: 'Onceava y doceava semana de desarrollo',
    category: 'correciones',
    subCategory: ['detalles', 'exportación', 'sustos'],
    description:
      "Ya como añadiduras, realizamos mecánicas de sustos a lo largo de este nivel, por algunas áreas del modelado de la casa, por ejemplo, construimos apariciones con activadores, señales o guías para el jugador que le faciliten el cumplimiento de los objetivos, audios terroríficos para una mayor inmersión y tensión en el ambiente, referente al ambiente también, trabajamos con una paleta de colores puntual y un juego de luces que se complementaran con el fin de adentrar al usuario en una atmosfera terrorífica. Algunos detalles que nos gustaría resaltar en este desarrollo es que, cada uno de los objetos de la escena y, por ende, todo lo que esta escena conlleva, son de autoría del grupo, no usamos bancos de modelado, imágenes o audios que fuesen libres y gratuitos, resaltamos siempre el hecho de que queríamos sentir cierta propiedad única con este trabajo, tanto así, que la pagina web en la que están leyendo toda esta información, también es de autoría del grupo, la realizamos usando React. Todos y cada uno de los elementos realizados tienen una razón de ser y fueron previamente investigados, para obtener una línea grafica coherente.",
    authorName: 'Juan Sebastian Galeano A',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Octubre 20, 2022',
    cover:
      '/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg',
  },
  {
    id: 7,
    title: 'Treceava y catorceava semana de desarrollo',
    category: 'final',
    subCategory: ['final', 'usuarios', 'recomendaciones'],
    description:
      "Ya cuando teníamos todo realizado, lo único que restaba era exportar toda la escena construida a marrow, para que contara con un terminado mejor y con un rendimiento óptico, fua aquí donde resultaron muchos problemas, el juego no respondía cuando realizábamos la transferencia a este motor, porque no deja correr código personal, debe ser la forma de eventos con los que cuenta marrow, es decir, no podemos escribir código sino programar la misma loica con los nodos de eventos que trae la librería para eso, gastamos un tiempo considerable tratando de solventar este problema, gracias a la comunidad de discord de marrow logramos darle manejo.",
    authorName: 'Juan Sebastian Galeano A',
    authorAvatar: '/assets/images/Sebas.webp',
    createdAt: 'Octubre 27, 2022',
    cover: '/assets/images/Synthwave-Postmodern.jpg',
  },
];
