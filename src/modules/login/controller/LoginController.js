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
        return response
    },

    update: async() => {}
}