const LoginController = {

    login: async() => {
        const cpf = document.getElementById("cpf").value;
        const password = document.getElementById("senhaLogin").value;
        const userData = {
            cpf,
            password
        }
        validateLogin(userData)
        const response = await LoginModel.login(userData)

        const user = await UserModel.get()

        localStorage.setItem('currentAccountId', user.accounts[0].id)

        User.setName(user.name)
        User.setAccountNumber(user.accounts[0].number)
        User.setBalance(user.accounts[0].number)

        return response
    },

    update: async() => {}
}