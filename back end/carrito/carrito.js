let mostrador = document.getElementById("mostrador")
let seleccion = document.getElementById("seleccion")
let imgSeleccionada = document.getElementById("img")
let modeloSeleccionado = document.getElementById("modelo")
let descripSeleccionada = document.getElementById("descripcion")
let precioSeleccionado = document.getElementById("precio")

function cargar(item){
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccianda.src = item.getElementByTagName("img")[0].src

    modeloSeleccionado.innerHTML = item.getElementById("p")[0].innerHTML

    descripSeleecionada.innerHTML = "Descripcion del modelo"

    precioSeleccionado.innerHTML = item.getElementById("span")[0].innerHTML
}
