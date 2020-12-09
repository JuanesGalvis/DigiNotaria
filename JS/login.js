const btn_login = document.querySelector('#LoginBtn');
const form_login = document.querySelector('.login');

const InputEmail = document.querySelector('#EmailInput');
const InputPassw = document.querySelector('#PasswordInput');

form_login.addEventListener('submit', (event) => {
    event.preventDefault();

    if (InputEmail.value == "") {
        alert("Correo electrónico Vacio")
        InputEmail.classList.add('Error')
    }

    if (InputPassw.value == "") {
        alert("Contraseña Vacia")
        InputPassw.classList.add('Error')
    }

    if (InputEmail.value != "" && InputPassw.value != "") {
        alert("Este correo no tiene una cuenta registrada. Por favor registrate o ingresa como invitado")
        InputPassw.classList.remove('Error')
        InputEmail.classList.remove('Error')

        InputEmail.value = "";
        InputPassw.value = "";
    }
})

const Link_Invitado = document.querySelector('#Invitado')

Link_Invitado.addEventListener('click', () => {

    localStorage.setItem('Sesion', 'Invitado')
    window.location = '../html/home_guest.html'

})