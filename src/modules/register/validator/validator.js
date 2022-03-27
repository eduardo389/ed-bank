function validarCadastro(user) {
    var confirmarSenha = document.getElementById("confirmarSenha");

    if (user.name == "") {
        alert("Nome não informado");
        nome.focus();
        return;
      }

    if (user.cpf == "") {
        alert("CPF não informado");
        senha.focus();
        return;
      }
    
    if (user.telefone == "") {
        alert("Telefone não informado");
        senha.focus();
        return;
      }
    
    if (user.email == "") {
        alert("E-mail não informado");
        email.focus();
        return;
      }

    if (user.password == "") {
        alert("Senha não informada");
        senha.focus();
        return;
      }

    if (confirmarSenha.value == "") {
        alert("Confirmação de senha não informada");
        senha.focus();
        return;
      }

    if (confirmarSenha.value != user.password ) {
        alert("As senhas informadas não são iguais");
        senha.focus();
        return;
      }

    
}