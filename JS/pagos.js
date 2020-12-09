
(function ValidarSesion () {
    
    const Bloqueo = document.querySelector('.BloqueoInvitado')
    const SesionActual = localStorage.getItem('Sesion');

    if (SesionActual == 'Invitado') {

        Bloqueo.removeAttribute('id')

    } else if (SesionActual == 'Cuenta') {

        Bloqueo.setAttribute('id', 'Oculto')

    }

})();


const FormPago = document.querySelector('.VentanaDePago');

const NumTarjeta = document.querySelector('#NumTarjeta');
const MesCaducidad = document.querySelector('#Mes');
const AnioCaducidad = document.querySelector('#Anio');
const Direccion = document.querySelector('#Direccion');
const CodPostal = document.querySelector('#CodPostal');

const ModalConfirmacion = document.querySelector('.ModalPagoExitoso');

FormPago.addEventListener('submit', (event) => {
    event.preventDefault();

    let TarjetaCorrecto = false;
    let AnioCorrecto = false;
    let DireccCorrecto = false;
    let PostalCorrecto = false;
    
    // TARJETA DE CREDITO
    if(NumTarjeta.value != 0 && NumTarjeta.value > 11111111111111111 && NumTarjeta.value < 99999999999999999) {
        NumTarjeta.classList.remove('Error')
        TarjetaCorrecto = true;
    }else {
        NumTarjeta.classList.add('Error')
        alert('Numero de Tarjeta de Credito erroneo o incompleto')
        TarjetaCorrecto = false;
    }

    // DIRRECCION
    if (Direccion.value == "") {
        Direccion.classList.add('Error')
        alert('Dirección vacia')
        DireccCorrecto = false;
    }else {
        Direccion.classList.remove('Error')
        DireccCorrecto = true;
    }

    // CÓDIGO POSTAL
    if (CodPostal.value == "") {
        CodPostal.classList.add('Error')
        alert('Codigo Postal vacio')
        PostalCorrecto = false;
    }else {
        CodPostal.classList.remove('Error')
        PostalCorrecto = true;
    }

    // AÑO DE CADUCIDAD
    if (AnioCaducidad.value == "") {
        AnioCaducidad.classList.add('Error')
        alert('Año de caducidad vacio')
        AnioCorrecto = false;
    }else {
        AnioCaducidad.classList.remove('Error')
        AnioCorrecto = true;
    }

    if(TarjetaCorrecto && DireccCorrecto && PostalCorrecto && AnioCorrecto) {
        ModalConfirmacion.classList.remove('Oculto')
        setTimeout(() => { FormPago.submit() }, 1000)
    }
})

const Atras = document.querySelector('#Atras')

Atras.addEventListener('click', () => {
  history.back();  
})