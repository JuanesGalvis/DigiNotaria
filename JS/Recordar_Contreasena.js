const input = document.querySelector('#inputEmail');
const btn = document.querySelector('.aceptar');

const Modal = document.querySelector('#Oculto');

btn.addEventListener('click', () => {

    if (input.value == "") {
        alert("Campo vacio");
        input.classList.add('Error');
    } else {
        input.classList.remove('Error');
        Modal.removeAttribute('id')
    }

})