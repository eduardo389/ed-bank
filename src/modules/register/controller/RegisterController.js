const RegisterController = {
    register: async() => {

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const cpf = document.getElementById("cpf");
        const telefone = document.getElementById("telefone");
        const user = {
            name: nome.value ,
            cpf: cpf.value,
            email: email.value,
            password: senha.value,
            phoneNumber: telefone.value
        }
        console.log(user)
        validarCadastro(user)
        const response = await RegisterModel.register(user)
        console.log(response)
        return response
    },
    
    update: async () => {}
}
