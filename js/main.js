const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const fragment = document.createDocumentFragment();



const arrayFotos = [{
    id:"",
    url: "assets/viajes-1.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},
{
    id:"",
    url: "assets/viajes-2.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},
{
    id:"",
    url: "assets/viajes-3.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
}

]
btnMostrar.addEventListener("click", pintarFotos);
function pintarFotos()  {
    arrayFotos.forEach((item) => {
        const cajaFotos = document.createElement("FIGURE");


        const caja = document.createElement("DIV");

        const imagen = document.createElement("IMG");
        imagen.id = item.id;
        imagen.src = item.url;


        const titulillo = document.createElement("H3");
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

btnOcultar.addEventListener("click", esconderFotos)
function esconderFotos(){

    btnOcultar.classList.add("ocultar")
    btnMostrar.classList.remove("ocultar")

    for(let i=0; i<arrayFotos.length; i++){
    contenedorFotos.removeChild(contenedorFotos.children[0]);}
}

