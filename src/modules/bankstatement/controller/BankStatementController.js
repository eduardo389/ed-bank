const BankStatementController = {

    BankStatement: async() => {
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
    },

    update: async() => {}
}