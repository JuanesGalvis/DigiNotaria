const $form= document.querySelector("#form");
var $password= document.querySelector("#password");
var $passwordCon= document.querySelector("#passwordCon");

$form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if($password.value == $passwordCon.value){
        $form.submit();
    }else{
        alert('Las contraseñas no coinciden');
    }
})

