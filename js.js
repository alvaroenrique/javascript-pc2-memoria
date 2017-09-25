var memoria = function () {
    //array que contiene todas las estiquetas hijas del tablero
    this.tablero = document.querySelectorAll("div.cuad");
    

    this.pintar = function () {
        //recorre el array
        this.tablero.forEach(function (el) {      
            el.addEventListener("click", function () {
                el.classList.add("peru");
                //al terminar la animacion del keyframe(2 seg) se quita la clase peru
                el.addEventListener("animationend", function () {
                    el.classList.remove("peru");
                });
            })
        });
    }
    //agregar el id del cuadrado clickeado al array seleccionados
    this.turnos = function(){
        var seleccionados = [];
        var turno = document.getElementById("turno");
        var len = 1;
        var intervalo_turno = 2;
        var turn = 2;

        //var selec_temp;

        this.tablero.forEach(function (el) {      
            el.addEventListener("click", function () {
                seleccionados.push(el.id);
                console.log(seleccionados)
                //si len=1 → turn=2| len=3 → turn=3| len=6 → turn=4| len=10 → turn=5| len=15 → turn=6|
                // len avanza en intervalos de +2 ,+3, +4, +5 ,+6
                if(seleccionados.length == len){
                    turno.textContent = "Turno " + turn;
                    len = len + intervalo_turno;
                    turn +=1;
                    intervalo_turno +=1;

                    /*
                    if(seleccionados.length == 1){
                        selec_temp = seleccionados;
                    }
                    if(seleccionados.length >= 3){
                        var lose = false;
                        var n_index = 1;
                        var sr = seleccionados.reverse();
                        var tr = selec_temp.reverse();
                        for (var i = 0; i < n_index; i++) {
                            if(sr[i+1] == tr[i]){
                                lose = false;
                                console.log("asdasd");
                            }
                            else{ lose = true; console.log("PERDISTE") }
                        }
                    }*/
                }
            })
        });
        
    }
    
    this.cronometro = function(){
        var clicked;
        var contador = document.getElementById("counter");
        var incrementarContador = function () {
            var cont = Number(contador.textContent);
            if (clicked == true) {
                clearInterval(setInterval);
            }
            else {
                contador.textContent = cont + 1;
            }
        };
        setInterval(incrementarContador, 1000);
        /*
        document.getElementById("button").addEventListener("click", e => {
          clicked = true;
        });
        */
    }
    this.start = function(){
        this.pintar();
        this.cronometro();
        this.turnos();
    }
    

}



var main = function () {

    var juego1 = new memoria;
    juego1.start();

}

window.onload = main;