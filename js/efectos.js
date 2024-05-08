/* INICIO DEL CODIGO PARA EL MENU*/

let posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {
    esconderMostrarMenu();
}

function esconderMostrarMenu() {
    let posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > posActualScroll) {

        document.getElementById("navbar").style.top="0";

    } else {
        document.getElementById("navbar").style.top="-150px";
      }

    posPreviaScroll = posActualScroll;
}

/*FIN DEL CODIGO PARA EL MENU*/

/*INICIO DEL SLIDER*/ 
let sliderList = document.getElementById("slider");
let slides = sliderList.querySelectorAll("li");
let slideIndex = 0;
let intervalo;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function siguienteSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    mostrarSlide(slideIndex);
}

function anteriorSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    mostrarSlide(slideIndex);
}

function iniciarSlideshow() {
    mostrarSlide(slideIndex);
    intervalo = setInterval(siguienteSlide, 2000);
}

function pausarSlide() {
    clearInterval(intervalo);
}

window.onload = function () {
    iniciarSlideshow();
};
/*FIN DEL SLIDER*/ 

/**INICIO LIGHTBOX*/

let listaRutaImgGal = [];
let numeroIMG = 0;

function readyLightBox() {
  let listaImgGal = document.getElementsByClassName("imageGal");

  for (let i = 0; i < listaImgGal.length; i++) {
    listaRutaImgGal.push(listaImgGal[i].src);
  }

  for (let i = 0; i < listaImgGal.length; i++) {
    listaImgGal[i].addEventListener('click', openLightBox);
  }
}

function openLightBox(event) {
  let rutaImgClicada = event.currentTarget.src;

  numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);

  showImageInLightbox();
  closeLightBox();
}

function closeLightBox(){
  window.addEventListener("click", function(event){
    if(!event.target.matches(".imageLightBox") && !event.target.matches(".imageGal") && !event.target.matches(".lbButtons") &&  !event.target.matches(".fas") ){
        document.getElementById("modalLightBoxG").style.display = "none";
        document.documentElement.style.overflow = "auto";
    }
  });
}






function showImageInLightbox() {
  if (numeroIMG >= 0 && numeroIMG < listaRutaImgGal.length) {

    document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src='" + listaRutaImgGal[numeroIMG] + "'>";
    document.getElementById("modalLightBoxG").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
  }
}


function nextImgGal() {
  numeroIMG++;
  if (numeroIMG >= listaRutaImgGal.length) {
    numeroIMG = 0; 
  }
  showImageInLightbox();
}

function prevImgGal() {
  numeroIMG--;
  if (numeroIMG < 0) {
    numeroIMG = listaRutaImgGal.length - 1; 
  }
  showImageInLightbox();
}

document.addEventListener('DOMContentLoaded', function() {
  readyLightBox();
});

/*FIN DEL LIGHTBOX*/ 

/*INICIO  DE LA CARTA DEL MENU */
document.addEventListener("DOMContentLoaded", function() {
  marcarPestana('CartaPrimeros');
});

function marcarPestana(contenedorAMostrar){
  let listaConPestanas = document.getElementsByClassName("contenedorPestana");
  for(let i = 0; i < listaConPestanas.length; i++){
      listaConPestanas[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("etiquetaPestanas");
  for(let i = 0; i < tabLinks.length; i++){
      tabLinks[i].classList.remove("pestanaActiva");
  }

  let contenedorSeleccionado = document.getElementById(contenedorAMostrar);
  contenedorSeleccionado.style.display = "block";

  let tabLinkSeleccionado = document.querySelector(`.etiquetaPestanas[data-target="${contenedorAMostrar}"]`);
  tabLinkSeleccionado.classList.add("pestanaActiva");

  contenedorSeleccionado.classList.add("show-images");
}

/*FIN   DE LA CARTA DEL MENU */

/*INICIO FORMULARIO DEL MODAL*/ 


function modalReserva() {
  document.getElementById("modalReserva").style.display = "block";
  document.documentElement.style.overflow = "hidden";
  formCheck(); 
}

function formCheck() {
  let nombre = document.getElementById("formNombre").value;
  let numero = document.getElementById("formNumero").value;
  let fecha = document.getElementById("formFecha").value;
  let email = document.getElementById("formEmail").value;
  let mensaje;

  if (!document.getElementById("formNombre").checkValidity()) {
    mensaje = "Introduce un nombre correcto";
    document.getElementById("mensajeReserva").innerHTML = mensaje;
  } else if (!document.getElementById("formNumero").checkValidity()) {
    mensaje = "Introduce un número correcto.";
    document.getElementById("mensajeReserva").innerHTML = mensaje;
  } else if (!document.getElementById("formFecha").checkValidity()) {
    mensaje = "Introduce una fecha correcta.";
    document.getElementById("mensajeReserva").innerHTML = mensaje;
  } else if (!document.getElementById("formEmail").checkValidity()) {
    mensaje = "Introduce un correo electrónico correcto.";
    document.getElementById("mensajeReserva").innerHTML = mensaje;
  } else {
    mensaje =
      "Apreciado/a " +
      nombre +
      ", le confirmamos que se ha realizado la reserva para " +
      numero +
      " personas en el día " +
      fecha +
      ". Recibirá un correo electrónico de confirmación a " +
      email;
    document.getElementById("mensajeReserva").innerHTML = mensaje;
  }
}

function cerrarMBR() {
  document.getElementById("modalReserva").style.display = "none";
  document.documentElement.style.overflow = "auto";

  document.getElementById("formNombre").value = "";
  document.getElementById("formNumero").value = "";
  document.getElementById("formFecha").value = "";
  document.getElementById("formEmail").value = "";
}
/*FIN FORMULARIO DEL MODAL*/ 
