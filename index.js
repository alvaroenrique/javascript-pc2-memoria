var main = function(){

    var btn_com = document.getElementById("comenzar");
    btn_com.addEventListener("click", function(){

        var jugador = document.getElementById("jugador").value;

        if(localStorage.data){
            var mydata = JSON.parse(localStorage.getItem("data"));
            mydata.nombre.push(jugador)
            localStorage.setItem("data", JSON.stringify(mydata));

        }else{
             
            var jugadores = [jugador];
            var mydata = {
                nombre : jugadores
            };

            localStorage.setItem("data", JSON.stringify(mydata));
        }
    })

}

window.onload = main;