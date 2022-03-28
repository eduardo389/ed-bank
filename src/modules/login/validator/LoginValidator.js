function validateLogin(user){

    if (user.cpf == "") {
        alert("CPF não informado");
        cpf.focus();
        return;
      }
    if (user.password == "") {
        alert("Senha não informada");
        password.focus();
        return;
      }
}