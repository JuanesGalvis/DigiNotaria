const FormPago = document.querySelector('.VentanaDePago');

const NumTarjeta = document.querySelector('#NumTarjeta');
const MesCaducidad = document.querySelector('#Mes');
const AnioCaducidad = document.querySelector('#Anio');
const Direccion = document.querySelector('#Direccion');
const CodPostal = document.querySelector('#CodPostal');

const ModalConfirmacion = document.querySelector('.ModalPagoExitoso');

FormPago.addEventListener('submit', (event) => {
    event.preventDefault();

    let PagoCorrecto = false;
    
    // TARJETA DE CREDITO
    if(NumTarjeta.value != 0 && NumTarjeta.value > 11111111111111111 && NumTarjeta.value < 99999999999999999) {
        NumTarjeta.classList.remove('Error')
        PagoCorrecto = true;
    }else {
        NumTarjeta.classList.add('Error')
        alert('Numero de Tarjeta de Credito erroneo o incompleto')
        PagoCorrecto = false;
    }

    // DIRRECCION
    if (Direccion.value == "") {
        Direccion.classList.add('Error')
        alert('Dirección vacia')
        PagoCorrecto = false;
    }else {
        Direccion.classList.remove('Error')
        PagoCorrecto = true;
    }

    // CÓDIGO POSTAL
    if (CodPostal.value == "") {
        CodPostal.classList.add('Error')
        alert('Codigo Postal vacio')
        PagoCorrecto = false;
    }else {
        CodPostal.classList.remove('Error')
        PagoCorrecto = true;
    }

    // AÑO DE CADUCIDAD
    if (AnioCaducidad.value == "") {
        AnioCaducidad.classList.add('Error')
        alert('Año de caducidad vacio')
        PagoCorrecto = false;
    }else {
        AnioCaducidad.classList.remove('Error')
        PagoCorrecto = true;
    }

    if(PagoCorrecto) {
        ModalConfirmacion.classList.remove('Oculto')
        setTimeout(() => { FormPago.submit() }, 1000)
    }
})