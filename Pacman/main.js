// frenar con un botton 

// El objeto(Pacman) sigue el mouse 
window.onload=function () {
    var pacman=document.getElementById("pacman");
        document.onmousemove=function (event) {
        // Resolver problemas de compatibilidad
        event=event||window.event;
                         // Obtener la distancia de la barra de desplazamiento /
                                 // Resolver problemas de compatibilidad
            var st=document.body.scrollTop||document.documentElement.scrollTop;
            var sl=document.body.scrollLeft||document.documentElement.scrollLeft;
                                 // Obtener la posición del mouse
                                 // Use pageX pageY relativa a la página ------- clientY no se puede usar directamente en páginas con ruedas de desplazamiento
        var left=event.clientX;
        var top=event.clientY;
                         // Establecer el desplazamiento
        pacman.style.left=left+sl+"px";
        pacman.style.top=top+st+"px";
    }
}