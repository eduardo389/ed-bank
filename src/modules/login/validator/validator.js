function validarLogin(user){
  
    if (user.userId == "") {
        alert("Usuário não informado");
        nome.focus();
        return;
      }
    if (password.value == "") {
        alert("Senha não informada");
        nome.focus();
        return;
      }
}