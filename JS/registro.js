var parametros = location.search.substring(1,location.search.length);
var vecParametros = parametros.split("&");

const $nombre= document.querySelector('#nombre');
const $tipo= document.querySelector('#tipo');
const $numdoc= document.querySelector('#numdoc');
const $fecha= document.querySelector('#fecha');
const $deptonac= document.querySelector('#deptonac');
const $munnac= document.querySelector('#munnac');
const $deptores= document.querySelector('#deptores');
const $munres= document.querySelector('#munres');
const $notaria= document.querySelector('#notaria');
const $direccion= document.querySelector('#direccion');
const $telefono= document.querySelector('#telefono');
const $celular= document.querySelector('#celular');

const $form= document.querySelector('#form');
const $nombrePersona= document.querySelector('#nombrePersona');

$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    $nombrePersona.value = vecParametros[0].split("=")[1];
    $form.submit();
    
})


function placeParameters(){
    $nombre.innerText=vecParametros[0].split("=")[1] + " " + vecParametros[1].split("=")[1] + " " + vecParametros[2].split("=")[1];
    $tipo.innerText=vecParametros[3].split("=")[1];
    $numdoc.innerText=vecParametros[4].split("=")[1];
    $fecha.innerText=vecParametros[5].split("=")[1];
    $deptonac.innerText=vecParametros[6].split("=")[1];
    $munnac.innerText=vecParametros[7].split("=")[1];
    $deptores.innerText=vecParametros[8].split("=")[1];
    $munres.innerText=vecParametros[9].split("=")[1];
    $notaria.innerText=vecParametros[10].split("=")[1];
    $direccion.innerText=vecParametros[11].split("=")[1].split("+")[0] + " " + vecParametros[11].split("=")[1].split("+")[1] + " " +vecParametros[11].split("=")[1].split("+")[2] ;
    $telefono.innerText=vecParametros[12].split("=")[1];
    $celular.innerText=vecParametros[13].split("=")[1];
   
    localStorage.setItem('nombre', $nombre.outerText);
    localStorage.setItem('celular', $celular.outerText);
    localStorage.setItem('telefono', $telefono.outerText);
}


placeParameters();