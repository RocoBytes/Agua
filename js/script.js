// aqui esta el script del saludo inicial
document.getElementById("miBoton").addEventListener("click", () => {
    alert("¡Hola desde JavaScript wena los cabros!");
});

// este es el script que controla el carrusel de los comentarios
let pagesCarouesel = 3;
let index = 0;
function showSlide() {
    document.querySelector('.carousel').style.transform = `translateX(${-index * 100}%)`;
}
function nextSlide() {
    index = (index + 1) % pagesCarouesel;
    showSlide();
}
function prevSlide() {
    index = (index - 1 + pagesCarouesel) % pagesCarouesel;
    showSlide();
}