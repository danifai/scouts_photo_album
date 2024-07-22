function habilitarAnio() {
    var categoria = document.getElementById("categoria-select").value;
    var anioSelect = document.getElementById("anio-select");
    
    if (categoria !== "") {
        anioSelect.disabled = false;
        document.getElementById("alerta-categoria").style.display = "none";
    } else {
        anioSelect.disabled = true;
        anioSelect.value = "";
        document.getElementById("alerta-categoria").style.display = "block";
        document.getElementById("alerta-anio").style.display = "none";
    }
}

function buscarFotos() {
    var categoria = document.getElementById("categoria-select").value;   
    var anio = document.getElementById("anio-select").value;
    if (categoria === "") {
        document.getElementById("alerta-categoria").style.display = "block";
        document.getElementById("alerta-anio").style.display = "none";
        return;
    } 
    
    if (anio === "") {
        document.getElementById("alerta-anio").style.display = "block";
        document.getElementById("alerta-categoria").style.display = "none";
        return;
    }

    document.getElementById("alerta-categoria").style.display = "none";
    document.getElementById("alerta-anio").style.display = "none";

    var secciones = document.querySelectorAll(".album-section");
    secciones.forEach(section => section.style.display = "none");
    if (categoria === "castores" || categoria === "lobatos") {
        var albumId = "album-" + categoria + "-" + anio;
        var album = document.getElementById(albumId);
        if (album != "") {
            album.style.display = "block";
        }
    } else {
        document.getElementById("album-en-construccion").style.display = "block";
    }
}