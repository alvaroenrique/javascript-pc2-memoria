var main = function () {



    var data = JSON.parse(localStorage.data);
    //ordenar la data (para la proxima subir de esta manera al localstorage)
    var data_ord = [];
    for (var i = 0; i < data.nombre.length; i++) {
        data_ord.push({ nombre: data.nombre[i], tiempo: data.tiempo[i], turno: data.turno[i] })

    }
    var tabla = document.getElementById("tabla");
    for (var i = 0; i < data.nombre.length; i++) {
        var el = document.createElement("tr");
        tabla.appendChild(el);
        el.innerHTML = '<th scope="row">' + (i + 1) + '</th><td>' + data_ord[i].nombre + '</td><td>' + data_ord[i].tiempo + ' segundos' + '</td><td>' + 'turno ' + data_ord[i].turno + '</td>'

    }
    var nombre = document.getElementById("nombre");
    nombre.addEventListener("click", function () {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }
        data_ord.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        for (var i = 0; i < data.nombre.length; i++) {
            var el = document.createElement("tr");
            tabla.appendChild(el);
            el.innerHTML = '<th scope="row">' + (i + 1) + '</th><td>' + data_ord[i].nombre + '</td><td>' + data_ord[i].tiempo + ' segundos' + '</td><td>' + 'turno ' + data_ord[i].turno + '</td>'

        }
    })

    var tiempo = document.getElementById("tiempo");
    tiempo.addEventListener("click", function () {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }
        data_ord.sort(function (a, b) {
            if (a.tiempo > b.tiempo) {
                return 1;
            }
            if (a.tiempo < b.tiempo) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        for (var i = 0; i < data.tiempo.length; i++) {
            var el = document.createElement("tr");
            tabla.appendChild(el);
            el.innerHTML = '<th scope="row">' + (i + 1) + '</th><td>' + data_ord[i].nombre + '</td><td>' + data_ord[i].tiempo + ' segundos' + '</td><td>' + 'turno ' + data_ord[i].turno + '</td>'

        }
    })

    var turno = document.getElementById("turno");
    turno.addEventListener("click", function () {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }
        data_ord.sort(function (a, b) {
            if (a.turno > b.turno) {
                return 1;
            }
            if (a.turno < b.turno) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        data_ord.reverse();
        for (var i = 0; i < data.turno.length; i++) {
            var el = document.createElement("tr");
            tabla.appendChild(el);
            el.innerHTML = '<th scope="row">' + (i + 1) + '</th><td>' + data_ord[i].nombre + '</td><td>' + data_ord[i].tiempo + ' segundos' + '</td><td>' + 'turno ' + data_ord[i].turno + '</td>'

        }
    })

}

window.onload = main;