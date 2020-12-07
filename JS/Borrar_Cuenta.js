const btn_Eliminar = document.querySelector('#Eliminar');
const btn_Desactivar = document.querySelector('#Desactivar');

btn_Eliminar.addEventListener('click', () => {
    alert('Cuenta eliminada!')
    window.location="../html/index.html"
})

btn_Desactivar.addEventListener('click', () => {
    alert('Su cuenta ha sido desactivada, se volverá a habilitar en tu próximo inicio de sesión')
    window.location="../html/index.html"
})