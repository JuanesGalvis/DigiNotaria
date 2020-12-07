const form = document.querySelector('.form')

const InputActual = document.getElementById('Actual')
const InputNueva = document.getElementById('Nueva')
const InputConfirmacion = document.getElementById('Confirmacion')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar Vacios
    if (InputActual.value == "" || InputNueva.value == "" || InputConfirmacion.value == "") {
        alert("No puedes dejar ningún campo vacio")
    } else {

        // Validar si es igual
        if(InputActual.value == InputNueva.value) {
            alert("La nueva contraseña no puede ser igual a la anterior")
        } else {

            // Validar Nueva y confirmación
            if(InputConfirmacion.value != InputNueva.value) {
                alert("La nueva contraseña no se volvió a escribir de manera igual")
            } else {
                alert("Contraseña Actualizada de manera exitosa!")
                InputActual.value = ""
                InputNueva.value = ""
                InputConfirmacion.value = ""
            }

        }
    }
})