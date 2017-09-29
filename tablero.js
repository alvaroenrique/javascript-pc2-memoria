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
                if(seleccionados.length == len){
                    turno.textContent = "Turno " + (turn+1);
                    len = len + intervalo_turno;
                    turn +=1;
                    intervalo_turno +=1;
                    sel_temp.push(el.id);
                    console.log(sel_temp);
                    click_temp = 0
                }
                else{
                    if(sel_temp[click_temp] == el.id){
                        //console.log("ESTAS GANANDO")
                    }
                    else{
                        console.log("perdiste");
                        console.log("Turno perdido : "+turno.textContent);
                        var tiempo = document.getElementById("counter");
                        console.log("segundo: "+ tiempo.textContent)
                        var tab = document.getElementById("tab");
                        tab.classList.add("lose");
                        
                        // Aqui se debe ingresar los puntajes al localStorage
                        if(JSON.parse(localStorage.data).lc_tiempo){

                        }else{
                            var tiempos = [jugador];
                            var mytiempo = {
                                tiempo : tiempos
                            };
                            localStorage.setItem("tiempo", JSON.stringify(mytiempo));
                        }

                        if(JSON.parse(localStorage.data).lc_turno){

                        }else{

                        }
                        
                    }
                    click_temp +=1;
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