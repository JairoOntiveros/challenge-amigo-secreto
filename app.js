// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaDeNombres = [];
const textInput = document.getElementById('amigo'); //seleciona y asigna la caja de texto a una constante
const ganador = document.getElementById('resultado'); 



function agregarAmigo() {


    const nombre = textInput.value.trim(); //obtiene el valor de la caja de texto, y elimina espacios al comienzo y al final
    
    if (nombre == '') {
        alert('Ingresa un nombre válido por favor');
        return;
        
    } 
    // Comprobamos si el nombre se repite
    if (listaDeNombres.includes(nombre)) {
        alert('Este nombre ya esta en la lista por favor agrega uno diferente.');
        limpiarCaja();
        return;
    }
    //comprobamos si el sorteo se ha realizado anteriormente para reiniciar el juego
    if(ganador.innerHTML !==''){
        reinicioSorteo();
    }

    listaDeNombres.push(nombre);
    limpiarCaja();
    actualizarLista();
    return;

    
}

//agregar amigos tambien con presionar enter
textInput.addEventListener("keyup", function(event) { //utilizamos keyup ya que el evento se realizara una sola vez
    if (event.key === "Enter") {  
        agregarAmigo();
    }
});



function limpiarCaja() {
    document.getElementById('amigo').value = '';
    textInput.focus();    
    return;
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');  //este es un elemento del tipo ul
    listaAmigos.innerHTML = '';

    for(let i = 0; i<listaDeNombres.length;i++){
     let liNombre = document.createElement("li");
     liNombre.textContent = listaDeNombres[i]; //
     listaAmigos.appendChild(liNombre); // se añade el elemento li al objeto de tipo ul
    }
    return;
    
    
}

function sortearAmigo() {
    if(listaDeNombres.length < 2){
        alert('Se necesitan al menos dos nombres para realizar el sorteo');
        return;   
    }
    
        let indiceGanador = Math.floor(Math.random()*listaDeNombres.length);
        ganador.innerHTML = `El amigo sorteado secreto es: ${listaDeNombres[indiceGanador]}.`;
        limpiarCaja(); 
        listaAmigos.innerHTML = ''; //vaciamos el objeto ul
        
    }


function reinicioSorteo() {
    ganador.innerHTML = '';
    listaDeNombres.length = 0; //funciona para vaciar el array
    actualizarLista();
}
