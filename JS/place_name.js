var parametros = location.search.substring(1,location.search.length);
var vecParametros = parametros.split("&");

const $welcome = document.querySelector('.welcome');

if (localStorage.getItem('Sesion') != 'Invitado') {
    (()=>{
        $welcome.innerText="Bienvenido (a) " + localStorage.getItem('Nombre');
    })();
}

const formHome = document.querySelector('#FormHome')

const Nombre = document.querySelector('#NombreCompleto')
const Correo = document.querySelector('#Correo')
const Mensaje = document.querySelector('#Mensaje')

formHome.addEventListener('submit', (event) => {
    event.preventDefault();
    let FormCompleto = true;

    if (Nombre.value == "") {
        alert("Campo de nombre está vacio")
        Nombre.classList.add('Error')
        FormCompleto = false;
    }

    if (Correo.value == "") {
        alert("Campo de correo está vacio")
        Correo.classList.add('Error')
        FormCompleto = false;
    }

    if (Mensaje.value == "") {
        alert("Campo de mensaje está vacio")
        Mensaje.classList.add('Error')
        FormCompleto = false;
    }

    if (FormCompleto) {
        alert("Mensaje enviado correctamente!")
        Nombre.value = "";   
        Correo.value = "";   
        Mensaje.value = "";

        Nombre.classList.remove('Error');
        Correo.classList.remove('Error');
        Mensaje.classList.remove('Error');
    }
})