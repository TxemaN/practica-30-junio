
// Declaración de VARIABLES --->>>

const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const bannerBajo = document.querySelector("#bannerBajo img")
const fragment = document.createDocumentFragment();
<<<<<<< HEAD


// ARRAYS --->>>
=======
//con este addevent SWITCH llamamos a los botones de mostrar o no//
document.addEventListener('click', (ev) => {
    switch (ev.target) {
        case btnMostrar: return pintarFotos();
            break;
        case btnOcultar: return esconderFotos();
            break;
    }
    //con este condicional dentro del eventlistener hacemos que todo sobre lo que se haga click con clase fotico cambia la url de la foto de abajo//
    if (ev.target.classList.contains("fotico")) {

        bannerBajo.src = ev.target.src;
    }
})
>>>>>>> c1db1a3ab0834b6881c88a4ea4b0a098cbbe37bc

const arrayFotos = [{
    id: "foto1",
    url: "assets/viajes-1.jpg",
    alt: "playa con mujer en hamaca",
    titulo: "Viaje 1",
    pie: "Disfruta del Sol"
},
{
    id: "foto2",
    url: "assets/viajes-2.jpg",
    alt: "pasarela a cabañas sobre el agua",
    titulo: "Viaje 2",
    pie: "Best Lounges"
},
{
    id: "foto3",
    url: "assets/viajes-3.jpg",
    alt: "letreros en todas direcciones",
    titulo: "Viaje 3",
    pie: "Principales Ciudades"
},
{
    id: "foto4",
    url: "assets/viajes-4.jpg",
    alt: "paseo del rio desde puente",
    titulo: "Viaje 4",
    pie: "Naturaleza y Arquitectura"
},

]


// Delegación de EVENTOS --->>>

//con este addevent SWITCH llamamos a los botones de mostrar o no//
document.addEventListener('click', (ev) => {
    switch (ev.target.id) {
        case "btnMostrar": return pintarFotos();
            break;
        case "btnOcultar": return esconderFotos();
            break;

    }
})

//con este addevent hacemos que todo sobre lo que se haga click con clase fotico cambia la url de la foto de abajo//
document.addEventListener('click', (ev) => {
    if (ev.target.classList.contains("fotico")) {

        bannerBajo.src = ev.target.src;

    }
})


//Declaración de FUNCIONES --->>>

//Aquí creamos las fotos con los ids y las clases//
const pintarFotos = () => {
    arrayFotos.forEach((item) => {
        const cajaFotos = document.createElement("FIGURE");
        const caja = document.createElement("DIV");
        const titulillo = document.createElement("H3");
        const imagen = document.createElement("IMG");


        imagen.id = item.id;
        imagen.src = item.url;
        imagen.classList.add("fotico");
        titulillo.textContent = imagen.titulo;


        caja.append(titulillo);
        caja.append(imagen);
        cajaFotos.append(caja);

        fragment.append(cajaFotos);
    })
    contenedorFotos.append(fragment);

    btnMostrar.classList.add("ocultar")
    btnOcultar.classList.remove("ocultar")
}


const esconderFotos = () => {

    btnOcultar.classList.add("ocultar")
    btnMostrar.classList.remove("ocultar")

<<<<<<< HEAD

=======
>>>>>>> c1db1a3ab0834b6881c88a4ea4b0a098cbbe37bc
    for (let i = 0; i < arrayFotos.length; i++) {
        contenedorFotos.removeChild(contenedorFotos.children[0]);
    }
}


// INVOCACIÓN de Funciones --->>>

pintarFotos();
esconderFotos()
