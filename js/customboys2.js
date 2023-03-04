var rutaOriginal = document.getElementById('imagen').src;

function cambiarImagen() {
    var imagen = $('#imagen');
    if (imagen.attr('src') == rutaOriginal) {
        imagen.fadeOut(400, function() {
            imagen.attr('src', 'images/modelos/modelo2.jpg').fadeIn(400);
        });
    } else {
        imagen.fadeOut(400, function() {
            imagen.attr('src', rutaOriginal).fadeIn(400);
        });
    }
}
