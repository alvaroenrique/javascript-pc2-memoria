var main = function(){

    var btn_com = document.getElementById("comenzar");
    btn_com.addEventListener("click", function(){
        if(localStorage.data){
            var jugador = document.getElementById("jugador").value; 
            var mydata = {
                nombre : jugador
            };

            localStorage.setItem("data", JSON.stringify(mydata));
        }
    })

}

window.onload = main;