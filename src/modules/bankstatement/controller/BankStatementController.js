const BankStatementController = {

    BankStatement: async() => {
        try {
            const initialDate = document.getElementById("initialDate").value;
            const finalDate = document.getElementById("finalDate").value;
            const params = {
                initialDate: new Date(initialDate).toISOString("pt-BR", { timeZone: "America/Sao_Paulo" }),
                finalDate: new Date(finalDate).toISOString("pt-BR", { timeZone: "America/Sao_Paulo" })
            }
            validateBankStatement(params)
            const response = await BankStatementModel.BankStatement(params)
            generateBankStatement(params, response);


            console.log(response)

        } catch (error) {
            if (error.status === 403) {
                alert(`Seu token de acesso expirou. Por favor, faça login novamente.`)
                window.location.pathname = "src/modules/login/view/login.html"
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    },

    update: async() => {}
}