const LoginController = {

    login: async() => {
        try {
            const cpf = document.getElementById("cpf").value;
            const password = document.getElementById("senhaLogin").value;
            const userData = {
                cpf,
                password
            }
            validateLogin(userData)
            localStorage.clear();
            const response = await LoginModel.login(userData)

            const user = await UserModel.get()

            User.setName(user.name)
            User.setAccountId(user.accounts[0].id)
            User.setAccountNumber(user.accounts[0].number)
            User.setBalance(user.accounts[0].balance)
            User.setEmail(user.email)

            window.location.pathname = "src/modules/user/view/home.html"

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

    update: async() => {}
}