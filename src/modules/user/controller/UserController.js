const UserController = {

    create: async() => {
        const name = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;
        const cpf = document.getElementById("cpf").value;
        const phoneNumber = document.getElementById("telefone").value;
        const user = {
            name,
            cpf,
            email,
            password,
            phoneNumber
        }
        if (!validateUserRegister(user)) return
        const response = await UserModel.create(user)

        if (!response.id) {
            alert(`Ocorreu alguma falha ao criar sua conta, por favor tente mais tarde ou entre em contato com a equipe de atendimento!`)
            return
        }

        alert(`Conta criada com sucesso! Seja bem vindo ${response.name}!`)
        window.location.pathname = "src/modules/login/view/login.html"
        return response
    },

    update: async() => {}
}