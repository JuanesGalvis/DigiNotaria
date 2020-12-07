var parametros = location.search.substring(1,location.search.length);
var vecParametros = parametros.split("&");

const $welcome = document.querySelector('.welcome');

(()=>{
    $welcome.innerText="Bienvenido (a) " + vecParametros[0].split("=")[1];
})();