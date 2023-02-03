//document.getElementById("boton").addEventListener('click', function (){
  //  console.log("Hola mundo desde EventListener");
//document.getElementById("gracias").innerHTML = window.alert("Gracias por su visita") ;
//});

//carteles

function validateForm() {
    let x = document.forms["formulario"]["email"].value;
    let y = document.forms["formulario"]["nombre"].value;

    if (x == "") {
      alert("olvidaste ingresar tu email");
      return false;
    }
    if (y == "") {
        alert("olvidaste ingresar tu nombre");
        return false;
    }
    else {
        alert("Muchas gracias por tu mensaje");
    }
}

