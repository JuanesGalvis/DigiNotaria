// CAMBIAR NOMBRE

const CambiarNombre = document.querySelector('#CambiarNombre');
const Nombre = document.querySelector('#Nombre');

CambiarNombre.addEventListener('click', () => {

    let NuevaInfo = prompt("Introduzca su nuevo nombre:", "");
    Nombre.innerHTML = NuevaInfo + ' '

})

// CAMBIAR CELULAR
const CambiarCelular = document.querySelector('#CambiarCelular');
const Celular = document.querySelector('#Celular');

CambiarCelular.addEventListener('click', () => {

    let NuevaInfo = prompt("Introduzca su nuevo celular:", "");
    Celular.innerHTML = NuevaInfo + ' '
})

// CAMBIAR TÉLEFONO
const CambiarTelefono = document.querySelector('#CambiarTelefono');
const Telefono = document.querySelector('#Telefono');

CambiarTelefono.addEventListener('click', () => {

    let NuevaInfo = prompt("Introduzca su nuevo Telefono:", "");
    Telefono.innerHTML = NuevaInfo + ' '
})


