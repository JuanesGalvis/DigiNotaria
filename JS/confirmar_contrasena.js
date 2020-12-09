const $form= document.querySelector("#form");
var $password= document.querySelector("#password");
var $passwordCon= document.querySelector("#passwordCon");

const $nombre= document.querySelector('#nombre');
const $tipo= document.querySelector('#tipoId');
const $numdoc= document.querySelector('#numeroId');
const $fecha= document.querySelector('#fecha');
const $deptonac= document.querySelector('#deptonac');
const $munnac= document.querySelector('#ciudadnac');
const $deptores= document.querySelector('#deptoResi');
const $munres= document.querySelector('#ciudadResi');
const $notaria= document.querySelector('#notaria');
const $direccion= document.querySelector('#direccion');
const $telefono= document.querySelector('#telefono');
const $celular= document.querySelector('#celular');
const $foto = document.querySelector('#photo');

$form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let RegistroCompleto = true;

    if ($nombre.value == "") {
        alert("Campo de Nombre Vacio")
        RegistroCompleto = false
    }

    if ($celular.value == "") {
        alert("Campo de Celular Vacio")
        RegistroCompleto = false
    }

    if ($deptonac.value == "") {
        alert("Campo de Departamento de Nacimiento Vacio")
        RegistroCompleto = false
    }
    
    if ($deptonac.value == "") {
        alert("Campo de Departamento de Nacimiento Vacio")
        RegistroCompleto = false
    }

    if ($direccion.value == "") {
        alert("Campo de Dirección Vacio")
        RegistroCompleto = false
    }

    if ($fecha.value == "") {
        alert("Campo de Fecha de Nacimiento Vacio")
        RegistroCompleto = false
    }

    if ($notaria.value == "") {
        alert("Campo de Notaria Vacio")
        RegistroCompleto = false
    }

    if ($numdoc.value == "") {
        alert("Campo de Numero de Documento Vacio")
        RegistroCompleto = false
    }

    if ($telefono.value == "") {
        alert("Campo de Telefono Vacio")
        RegistroCompleto = false
    }

    if ($tipo.value == "") {
        alert("Campo de Tipo de Documento Vacio")
        RegistroCompleto = false
    }
    
    if($password.value != $passwordCon.value){
        alert('Las contraseñas no coinciden');
        RegistroCompleto = false
    }

    if (RegistroCompleto) {

        localStorage.setItem('Sesion', 'Cuenta')
        localStorage.setItem('Nombre', $nombre.value)
        $form.submit();
    } else {
        alert("Hay uno o varios campos vacios en el formulario")
    }
})

