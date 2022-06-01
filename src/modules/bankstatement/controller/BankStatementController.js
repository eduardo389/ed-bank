const BankStatementController = {

    BankStatement: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const params = {
            initialDate: new Date(initialDate).toISOString(),
            finalDate: new Date(finalDate).toISOString()
        }
        validateBankStatement(params)
        const response = await BankStatementModel.BankStatement(params)
        generateBankStatement(params, response);


        console.log(response)
    },

    update: async() => {}
}