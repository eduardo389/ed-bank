const LoginController = {

    login: async() => {
        const cpf = document.getElementById("cpf").value;
        const password = document.getElementById("senhaLogin").value;
        const user = {
            cpf,
            password
        }
        validateLogin(user)
        const response = await LoginModel.login(user)

        const getUser = await LoginModel.get()

        localStorage.setItem('currentAccountId', getUser.accounts[0].id)

        User.setName(getUser.name)
        User.setAccountNumber(getUser.accounts[0].number)

        console.log(response)
        return response
    },

    update: async() => {}
}