var boton = document.getElementById("botonLanzar");
var resultado = document.getElementById("resultado");

boton.addEventListener("click", function(){
    var aleatorio = Math.floor(Math.random() * 2);

    if (aleatorio === 0) {
        resultado.value = "RONRONEO";
    }else {
        resultado.value = "MORDISCO";
    }
    }
);