function validarLogin(user){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senhaLogin");

    if (usuario.value == "") {
        alert("Usuário não informado");
        nome.focus();
        return;
      }
    if (senha.value == "") {
        alert("Senha não informada");
        nome.focus();
        return;
      }
}