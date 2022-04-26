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

        const user1 = await UserModel.get()

        localStorage.setItem('currentAccountId', user.accounts[0].id)

        console.log(response)
        return response
    },

    update: async() => {}
}