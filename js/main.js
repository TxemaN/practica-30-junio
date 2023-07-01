const contenedorFotos = document.querySelector("#contenedor-fotos");
const btnMostrar = document.querySelector("#btnMostrar")
const btnOcultar = document.querySelector("#btnOcultar")
const padre=document.querySelector('#padre');
const fragment = document.createDocumentFragment();

document.addEventListener('click',(ev)=>{

	if(ev.target==btnMostrar){
		return pintarFotos();
	}

	else if (ev.target==btnOcultar){
		return esconderFotos();
	}

})

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


function esconderFotos(){

    btnOcultar.classList.add("ocultar")
    btnMostrar.classList.remove("ocultar")

    for(let i=0; i<arrayFotos.length; i++){
    contenedorFotos.removeChild(contenedorFotos.children[0]);}
}

