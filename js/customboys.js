var rutaOriginal = document.getElementById('imagen').src;

function cambiarImagen() {
    var imagen = $('#imagen');
    if (imagen.attr('src') == rutaOriginal) {
        imagen.fadeOut(400, function() {
            imagen.attr('src', 'images/modelos/modelo1.jpg').fadeIn(400);
        });
    } else {
        imagen.fadeOut(400, function() {
            imagen.attr('src', rutaOriginal).fadeIn(400);
        });
    }
}

function setBackgroundColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    const numSpots = Math.floor(Math.random() * 50) + 50;
    const spotContainer = document.getElementById("spotContainer");
  
    for (let i = 0; i < numSpots; i++) {
      const spot = document.createElement("div");
      spot.classList.add("spot");
      spot.style.top = Math.random() * 100 + "%";
      spot.style.left = Math.random() * 100 + "%";
      spot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      spot.style.width = Math.random() * 20 + 10 + "px";
      spot.style.height = spot.style.width;
      spotContainer.appendChild(spot);
    }
  }
  