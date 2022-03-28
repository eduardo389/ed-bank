function validateUserRegister(user) {
    var confirmPassword = document.getElementById("confirmarSenha");

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

    if (user.phoneNumber == "") {
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

    if (confirmPassword.value == "") {
        alert("Confirmação de senha não informada");
        senha.focus();
        return;
    }

    if (confirmPassword.value != user.password) {
        alert("As senhas informadas não são iguais");
        senha.focus();
        return;
    }


}