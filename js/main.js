// Bienvenidos al juego de los penales, consta de anotar un gol a la IA!

alert("Bienvenidos al juego de los penales, consta de anotar un gol a la IA!")

let gol = true;

let opcionMaradona;

do{
    const opcionIa = parseInt((Math.random() * 2) + 1);
    opcionMaradona = parseInt(prompt("Ingrese su eleccion:\n\n1. Para derecha.\n2. Para el centro.\n3. Para la izquierda"));

    if (opcionMaradona === opcionIa){
        alert("Que golazo que me hiciste crack. Volve a probar tus habilidades.");
    } else {
        switch (opcionIa) {
            case 1:
                if (opcionMaradona === 2){
                    alert("Por poquito.");
                    gol = false;
                } else if(opcionMaradona === 3){
                    alert("Que atajadaaaa.");
                    gol = false;
                } else{
                    alert("Ingresaste una opcion que no es valida")
                };
                break;

            case 2:
                    if (opcionMaradona === 1){
                        alert("Ayyyy casi.");
                        gol = false;
                    } else if(opcionMaradona === 3){
                        alert("Travesaño.");
                        gol = false;
                    } else{
                        alert("Ingresaste una opcion que no es valida")
                    };
                    break;    
            case 3:
                        if (opcionMaradona === 1){
                            alert("Paloooooo.");
                            gol = false;
                        } else if(opcionMaradona === 3){
                            alert("Para que te traje.");
                            gol = false;
                        } else{
                            alert("Ingresaste una opcion que no es valida")
                        };
                        break;     
            default:
                alert("El arquero esta recuperandose. ")
        }
    }

}while("gol")