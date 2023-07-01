const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const bannerBajo = document.querySelector("#bannerBajo img")
const fragment = document.createDocumentFragment();

document.addEventListener('click',(ev)=>{
switch (ev.target.id) {
    case "btnMostrar" : return pintarFotos();
    break;
    case "btnOcultar" : return esconderFotos();
    break;
    case "foto1" : return bannerBajo.src=ev.target.src;
     break;
     case "foto2" : return bannerBajo.src=ev.target.src;
     break;
     case "foto3" : return bannerBajo.src=ev.target.src;
     break;
     case "foto4" : return bannerBajo.src=ev.target.src;
     break;
}}
	)

const arrayFotos = [{
    id:"foto1",
    url: "assets/viajes-1.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},
{
    id:"foto2",
    url: "assets/viajes-2.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},
{
    id:"foto3",
    url: "assets/viajes-3.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},
{
    id:"foto4",
    url: "assets/viajes-4.jpg",
    alt: "",
    titulo: "MIMIMIMIMI",
    pie: ""
},

]

const pintarFotos =() => {
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


const esconderFotos = () =>{

    btnOcultar.classList.add("ocultar")
    btnMostrar.classList.remove("ocultar")

    for(let i=0; i<arrayFotos.length; i++){
    contenedorFotos.removeChild(contenedorFotos.children[0]);}
}


