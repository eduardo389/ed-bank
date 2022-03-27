const RegisterController = {

    register: async() => {
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
        console.log(user)
        validarCadastro(user)
        const response = await RegisterModel.register(user)
        console.log(response)
        return response
    },

    update: async() => {}
}