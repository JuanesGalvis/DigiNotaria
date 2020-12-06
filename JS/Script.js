// Mostrar Menú
const botton_Menu = document.querySelector('.Btn_Menu');
const botton_ocultar = document.querySelector('.OcultarMenu');
const Menu = document.querySelector('.Menu');

const Btn_Atras = document.querySelector('.MenuAtras');

botton_Menu.addEventListener('click', MostrarMenu)
botton_ocultar.addEventListener('click', OcultarMenu)

function MostrarMenu () {
    Menu.removeAttribute('id');
}

function OcultarMenu () {
    Menu.setAttribute('id', 'Oculto');
}