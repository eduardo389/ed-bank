function validateUserRegister(user) {
    var confirmPassword = document.getElementById("confirmarSenha");

    if (user.name == "") {
        alert("Nome não informado");
        nome.focus();
        return false;
    }

    if (user.cpf == "") {
        alert("CPF não informado");
        senha.focus();
        return false;
    }

    if (user.phoneNumber == "") {
        alert("Telefone não informado");
        senha.focus();
        return false;
    }

    if (user.email == "") {
        alert("E-mail não informado");
        email.focus();
        return false;
    }

    if (user.password == "") {
        alert("Senha não informada");
        senha.focus();
        return false;
    }

    if (confirmPassword.value == "") {
        alert("Confirmação de senha não informada");
        senha.focus();
        return false;
    }

    if (confirmPassword.value != user.password) {
        alert("As senhas informadas não são iguais");
        senha.focus();
        return false;
    }

    return true
}