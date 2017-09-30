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
    this.turnos = function () {
        var seleccionados = [];
        var turno = document.getElementById("turno");
        var len = 1;
        var intervalo_turno = 2;
        var turn = 1;
        var sel_temp = [];
        var click_temp = 0;

        //var selec_temp;

        this.tablero.forEach(function (el) {
            el.addEventListener("click", function () {
                seleccionados.push(el.id);
                //console.log(seleccionados)

                //si len=1 → turn=1| len=3 → turn=2| len=6 → turn=3| len=10 → turn=4| len=15 → turn=5| (len es el numero de click en cada turno)
                // len → turno
                // len avanza en intervalos de +2 ,+3, +4, +5 ,+6
                if (seleccionados.length == len) {
                    turno.textContent = "Turno " + (turn + 1);
                    len = len + intervalo_turno;
                    turn += 1;
                    intervalo_turno += 1;
                    sel_temp.push(el.id);
                    console.log(sel_temp);
                    click_temp = 0
                }
                else {
                    if (sel_temp[click_temp] == el.id) {
                        //console.log("ESTAS GANANDO")
                    }
                    else {
                        console.log("perdiste");
                        console.log("Turno perdido : " + turno.textContent);
                        var tiempo = document.getElementById("counter");
                        console.log("segundo: " + tiempo.textContent)
                        var tab = document.getElementById("tab");
                        while (tab.firstChild) {
                            tab.removeChild(tab.firstChild);
                        }
                        tab.classList.remove("d-flex")
                        tab.innerHTML = '<div class="p-4"><h1>PERDISTE !!</h1><h4>'+turno.textContent+'</h4><h4>Segundos: '+tiempo.textContent+'</h4></div>';
                        var botones = document.getElementById("botones");
                        botones.innerHTML = '<a href="index.html"><button type="button" class="btn btn-warning m-4" id="comenzar">Volver a jugar</button></a><a href="high.html"><button type="button" class="btn btn-warning m-4" id="comenzar">Highscore</button></a>';

                        // Aqui se debe ingresar los puntajes al localStorage
                        if (JSON.parse(localStorage.data).tiempo) {
                            var mydata = JSON.parse(localStorage.getItem("data"));
                            mydata.tiempo.push(document.getElementById("counter").textContent);
                            localStorage.setItem("data", JSON.stringify(mydata));

                        } else {
                            var mydata = JSON.parse(localStorage.getItem("data"));
                            var tiempo_db = [document.getElementById("counter").textContent];
                            mydata.tiempo = tiempo_db;
                            localStorage.setItem("data", JSON.stringify(mydata));
                        }

                        if (JSON.parse(localStorage.data).turno) {
                            var mydata = JSON.parse(localStorage.getItem("data"));
                            mydata.turno.push(turn + 1);
                            localStorage.setItem("data", JSON.stringify(mydata));

                        } else {
                            var mydata = JSON.parse(localStorage.getItem("data"));
                            var turno_db = [(turn + 1)];
                            mydata.turno = turno_db;
                            localStorage.setItem("data", JSON.stringify(mydata));
                        }

                    }
                    click_temp += 1;
                }
            })
        });

    }

    this.cronometro = function () {
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

    }
    this.start = function () {
        this.pintar();
        this.cronometro();
        this.turnos();
        document.getElementById("jugador").innerHTML =
            JSON.parse(localStorage.getItem("data")).nombre[JSON.parse(localStorage.getItem("data")).nombre.length - 1];
    }


}



var main = function () {

    var juego1 = new memoria;
    juego1.start();

}

window.onload = main;