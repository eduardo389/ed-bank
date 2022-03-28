const RegisterController = {
    login: async() => {

        const cpf = document.getElementById("cpf");
        const password = document.getElementById("senhaLogin");
        const user = {
            cpf: cpf.value ,
            password: password.value
        }
        console.log(user)
        validarLogin(user)
        const response = await RegisterModel.register(user)
        console.log(response)
        return response
    },
    
    update: async () => {}
}
