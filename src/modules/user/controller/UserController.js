const UserController = {

    create: async() => {
        try {

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
        } catch (error) {
            if (error.status === 400) {
                if (error.error.message === "CPF_ALREADY_EXISTS") {
                    alert(`CPF já cadastrado.`)
                }
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    },

    updateUserInfo: async() => {
        try {

            const user = await UserModel.get()
            return UserModel.updateUserInfo(user)
        } catch (error) {
            if (error.status === 403) {
                alert(`Seu token de acesso expirou. Por favor, faça login novamente.`)
                localStorage.clear()
                window.location.pathname = "src/modules/login/view/login.html"
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    }
}