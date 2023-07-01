const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const bannerBajo = document.querySelector("#bannerBajo img")
const fragment = document.createDocumentFragment();
//con este addevent SWITCH llamamos a los botones de mostrar o no//
document.addEventListener('click',(ev)=>{
switch (ev.target.id) {
    case "btnMostrar" : return pintarFotos();
    break;
    case "btnOcultar" : return esconderFotos();
    break;
    
}})

//con este addevent hacemos que todo sobre lo que se haga click con clase fotico cambia la url de la foto de abajo//
document.addEventListener('click',(ev)=>{
    if (ev.target.classList.contains("fotico")) {
        
         bannerBajo.src=ev.target.src;
         
         }})

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
//Aquí creamos las fotos con los ids y las clases//
const pintarFotos =() => {
    arrayFotos.forEach((item) => {
        const cajaFotos = document.createElement("FIGURE");


        const caja = document.createElement("DIV");

        const imagen = document.createElement("IMG");
        imagen.id = item.id;
        imagen.src = item.url;
        imagen.classList.add("fotico");


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


